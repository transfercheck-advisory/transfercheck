const fs = require('fs');
const path = require('path');
const vm = require('vm');

const transferDataPath = path.join(__dirname, '..', 'transfer-data.js');
const fileContent = fs.readFileSync(transferDataPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);

const database = sandbox.window.transferDatabase;

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function isIgnorableSourceLine(rawCourse) {
  const text = normalizeText(rawCourse);
  return (
    !text ||
    text.includes("no additional recommended") ||
    text.includes("official required courses") ||
    text.includes("required courses 미게시") ||
    text.includes("필수과목 목록 없음") ||
    text.includes("공식 학과별 필수과목") ||
    text.includes("holistic review") ||
    text.includes("minimum gpa") ||
    text.includes("min gpa") ||
    text.includes("source:") ||
    text.includes("verified") ||
    text.includes("common app") ||
    text.includes("fall only") ||
    text.includes("spring only") ||
    text.includes("지원 시 전공 미지정") ||
    text.includes("gpa 최소치 없음")
    || text.includes("출처 ")
    || text.includes("공식 미게시")
    || text.includes("공식 원문")
    || text.includes("불필요")
    || text.includes("there are no required courses")
    || text.includes("not published")
    || text.includes("contact ")
    || text.includes("minimum credits")
    || text.includes("최소 크레딧")
    || text.includes("최대 이전")
    || text.includes("최대 18")
    || text.includes("전공 선택")
    || text.includes("전공 지원 시 미지정")
    || text.includes("지원 시 전공 미지정")
    || text.includes("fall 입학")
    || text.includes("p/f 과목")
    || text.includes("major change")
    || text.includes("second choice")
    || text.includes("pre-major")
    || text.includes("all transfer students enter")
    || text.includes("공대 편입은 2단계")
    || text.includes("penn state 입학")
    || text.includes("입학 후 etm")
    || text.includes("university park")
    || text.includes("모두 c 이상")
    || text.includes("grades of")
    || text.includes("성적 요건")
    || text.includes("recommended coursework 섹션")
    || text.includes("학과별 구체 과목 다름")
    || text.includes("학과별 advanced course")
    || text.includes("공대 전체 공통 기대치")
    || text.includes("strong transfer applicants")
    || text.includes("coursework 권장")
    || text.includes("재학 필수")
    || text.includes("gpa 최소치")
    || text.includes("학기 이하 이수")
    || text.includes("학기 초과 이수")
    || text.includes("편입 최소 gpa")
    || text.includes("편입은 2단계 구조")
    || text.includes("1단계:")
    || text.includes("2단계:")
    || text.includes("지원 전 이수해야")
    || text.includes("선이수 필수")
    || text.includes("권장과목 목록 없음")
    || text.includes("통제 여부")
    || text.includes("process discontinued")
    || text.includes("연 평균")
    || text.includes("지원 자격:")
    || text.includes("불인정:")
    || text.includes("공통 필수")
    || text.includes("최소 성적:")
    || text.includes("필수과목 gpa")
    || text.includes("spring 종료 전")
    || text.includes("학과 추가 필수")
    || text.includes("critical:")
    || text.includes("4대 공통")
    || text.includes("대체 가능")
    || text.includes("대체 불가")
    || text.includes("단계 추가 필수")
    || text.includes("coe는 학과별")
    || text.includes("공식 안내:")
    || text.includes("intended major, as listed")
    || text.includes("rigorous program of study")
    || text.includes("stanford soe:") || text.includes("must complete all required")
    || text.includes("아래 학과별 etm 과목")
    || text.includes("2년 졸업 위해 필요")
    || text.includes("assist.org 기준 해당 학과")
    || text.includes("모든 technical 과목")
    || text.includes("combination 과목")
    || text.includes("완료 기한")
    || text.includes("major prerequisite admissions")
    || text.includes("기타 하위과정 공학")
    || text.includes("your interest in the field")
    || text.includes("track declaration")
    || text.includes("chosen on application")
    || text.includes("english composition not in required")
    || text.includes("apma 2501")
    || text.includes("no second choice")
    || text.includes("no major change")
    || text.includes("enter as pre-major first")
    || text.includes("added was missing")
    || text.includes("unc does not have")
    || text.includes("idmen은 stanford")
  );
}

database.schools.forEach(school => {
  console.log(`School: ${school.name}`);
  school.majors.forEach(major => {
    const rawReqs = major.requiredCourses || [];
    const nonIgnored = rawReqs.filter(r => !isIgnorableSourceLine(r));
    const ignored = rawReqs.filter(r => isIgnorableSourceLine(r));
    console.log(`  Major: ${major.name}`);
    console.log(`    Total: ${rawReqs.length}, Ignored: ${ignored.length}, Non-ignored: ${nonIgnored.length}`);
    if (nonIgnored.length > 0) {
      console.log(`    Non-ignored list: ${JSON.stringify(nonIgnored)}`);
    }
  });
});
