/**
 * TransferChek Data Validation Linter Engine
 */

const LinterRules = {
  // Check if string contains recommendation keywords in required scope
  hasMixedTerms: function(text) {
    if (!text) return false;
    const lower = text.toLowerCase();
    const mixedTerms = [
      'recommended', 'generally', 'competitive', 'holistic', 
      '선택', '권장', '추천', '우대', 'strongly encouraged', 
      'suggested', 'preferred'
    ];
    return mixedTerms.some(term => lower.includes(term));
  },

  // Range checkers
  validateGpa: function(val) {
    if (val === undefined || val === null) return { valid: true };
    const num = parseFloat(val);
    if (isNaN(num) || num < 0 || num > 4.0) {
      return { valid: false, reason: `GPA 값(${val})이 0.0 ~ 4.0 범위를 벗어났습니다.` };
    }
    return { valid: true };
  },

  validateCredits: function(val) {
    if (val === undefined || val === null || val === "") return { valid: true };
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 0 || num > 90) {
      return { valid: false, reason: `이수 학점 제한 값(${val})이 0 ~ 90 범위를 벗어났습니다.` };
    }
    return { valid: true };
  },

  validateEnglish: function(type, score) {
    if (score === undefined || score === null || score === "") return { valid: true };
    const val = parseFloat(score);
    if (isNaN(val)) return { valid: false, reason: `영어 점수(${score})가 숫자가 아닙니다.` };

    switch (type) {
      case 'TOEFL':
        if (val < 60 || val > 120) return { valid: false, reason: `TOEFL 점수(${score})가 유효 범위(60~120)를 벗어났습니다.` };
        break;
      case 'TOEFL_2026':
        if (val < 0 || val > 6) return { valid: false, reason: `TOEFL 2026 점수(${score})가 유효 범위(0~6)를 벗어났습니다.` };
        break;
      case 'IELTS':
        if (val < 0 || val > 9) return { valid: false, reason: `IELTS 점수(${score})가 유효 범위(0~9)를 벗어났습니다.` };
        break;
      case 'Duolingo':
        if (val < 80 || val > 160) return { valid: false, reason: `Duolingo 점수(${score})가 유효 범위(80~160)를 벗어났습니다.` };
        break;
    }
    return { valid: true };
  },

  // Perform whole program validation
  runAllRules: function(program, database) {
    const warnings = [];
    const schoolName = program.school?.name || "";
    const isUc = /\bUC\b|University of California|Berkeley|UCLA|San Diego|Irvine|Davis|Santa Barbara|Santa Cruz|Riverside|Merced/i.test(schoolName);
    
    let sourcePresent = false;
    const noteText = program.note || "";
    if (noteText.includes('http://') || noteText.includes('https://') || noteText.includes('.edu') || noteText.includes('Source:')) {
      sourcePresent = true;
    }

    // 1. Check GPA
    const gpaCheck = this.validateGpa(program.minGpa);
    if (!gpaCheck.valid) warnings.push(gpaCheck.reason);

    const rawGpa = program.rawMinGpa || "";
    const gpaNumbers = rawGpa.match(/\b\d+(\.\d+)?\b/g);
    if (gpaNumbers) {
      gpaNumbers.forEach(n => {
        const val = parseFloat(n);
        if (val > 4.0 && val < 100) {
          warnings.push(`원문 GPA 성적에서 날짜 등이 잘못 파싱된 것으로 의심되는 숫자(${val})가 발견되었습니다.`);
        }
      });
    }

    // 2. Check Credits
    const creditCheck = this.validateCredits(program.minCredits);
    if (!creditCheck.valid) warnings.push(creditCheck.reason);

    // 3. Check English Requirements
    const eng = program.english || {};
    Object.keys(eng).forEach(key => {
      if (['TOEFL', 'TOEFL_2026', 'IELTS', 'Duolingo'].includes(key)) {
        const check = this.validateEnglish(key, eng[key]);
        if (!check.valid) warnings.push(check.reason);
      }
    });

    // 4. Check Course Mix
    if (this.hasMixedTerms(program.rawRequired) || (program.requiredCourses && program.requiredCourses.some(this.hasMixedTerms))) {
      warnings.push('필수 요구 과목 란에 권장/추천 등의 단어가 포함되어 있어 혼재 위험이 있습니다.');
    }

    // 5. Check Missing Courses
    let noRequiredCourses = false;
    if (!program.requiredCourses || program.requiredCourses.length === 0) {
      noRequiredCourses = true;
      warnings.push('필수 과목 정보가 비어 있습니다.');
    } else {
      const placeholders = program.requiredCourses.filter(req => {
        const text = req.toLowerCase();
        return text.includes('미게시') || text.includes('목록 없음') || text.includes('없음') || text.includes('no official required') || text.includes('미명시');
      });
      if (placeholders.length === program.requiredCourses.length) {
        noRequiredCourses = true;
        warnings.push('필수 과목 정보가 전부 플레이스홀더 메모로만 이루어져 있습니다.');
      }
    }

    // 6. Check Duplicate Reqs in Same School
    if (database && database.schools) {
      const schoolObj = database.schools.find(s => s.id === program.school?.id || s.name === schoolName);
      if (schoolObj && schoolObj.majors.length >= 3) {
        const currentReqSignature = (program.requiredCourses || []).slice().sort().join('|');
        let identicalCount = 0;
        schoolObj.majors.forEach(m => {
          const sig = (m.requiredCourses || []).slice().sort().join('|');
          if (sig === currentReqSignature) identicalCount++;
        });

        if (identicalCount >= 3) {
          warnings.push(`동일한 대학 내 다른 ${identicalCount}개 전공들과 필수 과목 목록이 완전히 복사된 것처럼 동일합니다.`);
        }
      }
    }

    if (!sourcePresent) {
      warnings.push('공식 소스 링크나 신뢰할 수 있는 검증 주석(note)이 제공되지 않았습니다.');
    }

    // Decide confidence
    let confidence = 'verified';
    if (!sourcePresent || noRequiredCourses || warnings.some(w => w.includes('범위를 벗어났습니다') || w.includes('의심되는'))) {
      confidence = 'high_risk';
    } else if (warnings.length > 0) {
      confidence = 'needs_source_check';
    } else {
      const noteLower = noteText.toLowerCase();
      if (!noteLower.includes('verified') && !noteLower.includes('correct')) {
        confidence = 'needs_source_check';
        warnings.push('노트에 공식 확인 완료(Verified) 표시가 기재되지 않았습니다.');
      }
    }

    return {
      confidence,
      warnings,
      isUc,
      sourcePresent
    };
  }
};

// Export compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinterRules;
} else {
  window.LinterRules = LinterRules;
}
