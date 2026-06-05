const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// Helper to replace content in file safely
function updateFile(filename, replacements) {
  const filePath = path.join(rootDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filename}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let hasCrlf = content.includes('\r\n');
  if (hasCrlf) {
    content = content.replace(/\r\n/g, '\n');
  }

  replacements.forEach(({ target, replacement }) => {
    if (content.includes(target)) {
      content = content.replace(target, replacement);
      console.log(`[${filename}] Replaced target successfully.`);
    } else {
      console.warn(`[${filename}] Target not found:\n${target}`);
    }
  });

  if (hasCrlf) {
    content = content.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. Update index.html
updateFile('index.html', [
  {
    target: `<select id="admissionYear">
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                  </select>`,
    replacement: `<select id="admissionYear">
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                    <option>2031</option>
                    <option>2032</option>
                  </select>`
  },
  {
    target: `<div id="roadmapSelectedCountNotice" class="verification-alert hidden" style="margin-bottom: 20px;">
                  <strong id="roadmapNoticeHeader">Planning for multiple targets</strong>
                  <span id="roadmapNoticeDetails" style="font-size: 12px; color: var(--muted); display: block; margin-top: 4px;">Using requirements from all selected targets in your profile.</span>
                </div>`,
    replacement: `<div id="roadmapSelectedCountNotice" class="verification-alert hidden" style="margin-bottom: 20px;">
                  <strong id="roadmapNoticeHeader">Planning for multiple targets</strong>
                  <span id="roadmapNoticeDetails" style="font-size: 12px; color: var(--muted); display: block; margin-top: 4px;">Using requirements from all selected targets in your profile.</span>
                  <span id="roadmapNoticeWarning" style="font-size: 12px; display: block; margin-top: 6px; font-weight: 700; color: #ef4444;" data-i18n="roadmap_multi_warning">Selecting more target schools may increase the required duration of coursework.</span>
                </div>`
  }
]);

// 2. Update terms-privacy-pricing.html
updateFile('terms-privacy-pricing.html', [
  {
    target: '<li>동시 비교 대상 대학 최대 10개 확장</li>',
    replacement: '<li>동시 비교 대상 대학 최대 7개 확장</li>'
  },
  {
    target: '저장된 10개 대학 슬롯 정보',
    replacement: '저장된 7개 대학 슬롯 정보'
  }
]);

// 3. Update app.js
let appPath = path.join(rootDir, 'app.js');
if (fs.existsSync(appPath)) {
  let code = fs.readFileSync(appPath, 'utf8');
  let hasCrlf = code.includes('\r\n');
  if (hasCrlf) {
    code = code.replace(/\r\n/g, '\n');
  }

  // A. Add translation keys
  const enTarget = 'roadmap_multi_notice_desc: "Prerequisites combined from: ",';
  const enReplacement = 'roadmap_multi_notice_desc: "Prerequisites combined from: ",\n    roadmap_multi_warning: "Selecting more target schools may increase the required duration of coursework.",';
  code = code.replace(enTarget, enReplacement);

  const koTarget = 'roadmap_multi_notice_desc: "병합된 대상 대학: ",';
  const koReplacement = 'roadmap_multi_notice_desc: "병합된 대상 대학: ",\n    roadmap_multi_warning: "목표 학교를 여러개 선택할 수록 수강 기간이 오래 걸릴 수 있습니다.",';
  code = code.replace(koTarget, koReplacement);

  const zhTarget = 'roadmap_multi_notice_desc: "已合并的大学先修课程: ",';
  const zhReplacement = 'roadmap_multi_notice_desc: "已合并的大学先修课程: ",\n    roadmap_multi_warning: "选择的目标学校越多，所需的修课时间可能越长。",';
  code = code.replace(zhTarget, zhReplacement);

  // B. Change slots length initialization
  code = code.replace(
    'targetSlots: Array.from({ length: 10 }, () => ({ school: "", major: "" })),',
    'targetSlots: Array.from({ length: 7 }, () => ({ school: "", major: "" })),'
  );

  // C. Change slice target slots in syncSelectedTargetsFromSlots
  code = code.replace(
    'state.selectedTargets = uniqueIds.slice(0, 10);',
    'state.selectedTargets = uniqueIds.slice(0, 7);'
  );

  // D. Update translate loop length in app.js
  code = code.replace(
    'for (let i = 0; i < 10; i++) {',
    'for (let i = 0; i < state.targetSlots.length; i++) {'
  );

  // E. Update loadProfileFromLocalStorage to slice to 7 and pad to 7
  const loadProfileTarget = `    if (Array.isArray(profile.targetSlots)) {
      const seen = new Set();
      state.targetSlots = profile.targetSlots.map(slot => {
        const key = \`\${slot.school?.trim() || ""}:\${slot.major?.trim() || ""}\`;
        if (key !== ":" && seen.has(key)) {
          return { school: "", major: "" };
        }
        if (key !== ":") seen.add(key);
        return slot;
      });
    }`;
  const loadProfileReplacement = `    if (Array.isArray(profile.targetSlots)) {
      const seen = new Set();
      let loadedSlots = profile.targetSlots.map(slot => {
        const key = \`\${slot.school?.trim() || ""}:\${slot.major?.trim() || ""}\`;
        if (key !== ":" && seen.has(key)) {
          return { school: "", major: "" };
        }
        if (key !== ":") seen.add(key);
        return slot;
      }).slice(0, 7);
      while (loadedSlots.length < 7) {
        loadedSlots.push({ school: "", major: "" });
      }
      state.targetSlots = loadedSlots;
    }`;
  code = code.replace(loadProfileTarget, loadProfileReplacement);

  if (hasCrlf) {
    code = code.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(appPath, code, 'utf8');
  console.log('[app.js] Updates applied successfully.');
}
