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
      console.warn(`[${filename}] Target not found.`);
    }
  });

  if (hasCrlf) {
    content = content.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. Update index.html to add 7 search slots and warning box in the Roadmap tab
updateFile('index.html', [
  {
    target: `                <div class="form-row" id="roadmapTargetRow">
                  <label for="roadmapTarget" data-i18n="label_roadmap_target">Target Program</label>
                  <select id="roadmapTarget"></select>
                </div>
                <div id="roadmapSelectedCountNotice" class="verification-alert hidden" style="margin-bottom: 20px;">
                  <strong id="roadmapNoticeHeader">Planning for multiple targets</strong>
                  <span id="roadmapNoticeDetails" style="font-size: 12px; color: var(--muted); display: block; margin-top: 4px;">Using requirements from all selected targets in your profile.</span>
                  <span id="roadmapNoticeWarning" style="font-size: 12px; display: block; margin-top: 6px; font-weight: 700; color: #ef4444;" data-i18n="roadmap_multi_warning">Selecting more target schools may increase the required duration of coursework.</span>
                </div>`,
    replacement: `                <div class="form-row">
                  <label style="font-weight: 800; text-transform: uppercase; font-size: 12px; color: var(--muted); display: block; margin-bottom: 8px;" data-i18n="roadmap_targets_label">Roadmap Target Programs (Max 7)</label>
                  <div class="target-picker" id="roadmapTargetPicker"></div>
                </div>
                <div class="verification-alert" style="margin-bottom: 20px;">
                  <span id="roadmapNoticeWarning" style="font-size: 12.5px; display: block; font-weight: 700; color: #fbbf24; line-height: 1.6;" data-i18n="roadmap_multi_warning">Selecting more target schools may increase the required duration of coursework.</span>
                </div>`
  }
]);

// 2. Restore terms-privacy-pricing.html back to 10 target slots
updateFile('terms-privacy-pricing.html', [
  {
    target: '<li>동시 비교 대상 대학 최대 7개 확장</li>',
    replacement: '<li>동시 비교 대상 대학 최대 10개 확장</li>'
  },
  {
    target: '저장된 7개 대학 슬롯 정보',
    replacement: '저장된 10개 대학 슬롯 정보'
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
  code = code.replace(
    'roadmap_multi_warning: "Selecting more target schools may increase the required duration of coursework.",',
    'roadmap_multi_warning: "Selecting more target schools may increase the required duration of coursework.",\n    roadmap_targets_label: "Roadmap Target Programs (Max 7)",'
  );
  code = code.replace(
    'roadmap_multi_warning: "목표 학교를 여러개 선택할 수록 수강 기간이 오래 걸릴 수 있습니다.",',
    'roadmap_multi_warning: "목표 학교를 여러개 선택할 수록 수강 기간이 오래 걸릴 수 있습니다.",\n    roadmap_targets_label: "로드맵 설계 대상 목표 대학 (최대 7개)",'
  );
  code = code.replace(
    'roadmap_multi_warning: "选择的目标学校越多，所需的修课时间可能越长。",',
    'roadmap_multi_warning: "选择的目标学校越多，所需的修课时间可能越长。",\n    roadmap_targets_label: "路线图规划目标大学（最多 7 个）",'
  );

  // B. Restore targetSlots back to 10 and add roadmapTargetSlots
  code = code.replace(
    'targetSlots: Array.from({ length: 7 }, () => ({ school: "", major: "" })),',
    'targetSlots: Array.from({ length: 10 }, () => ({ school: "", major: "" })),\n  roadmapTargetSlots: Array.from({ length: 7 }, () => ({ school: "", major: "" })),\n  selectedRoadmapTargets: [],'
  );

  // C. Update save/load profiles
  code = code.replace(
    'targetSlots: state.targetSlots',
    'targetSlots: state.targetSlots,\n    roadmapTargetSlots: state.roadmapTargetSlots'
  );

  const oldLoadProfile = `    if (Array.isArray(profile.targetSlots)) {
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

  const newLoadProfile = `    if (Array.isArray(profile.targetSlots)) {
      const seen = new Set();
      let loadedSlots = profile.targetSlots.map(slot => {
        const key = \`\${slot.school?.trim() || ""}:\${slot.major?.trim() || ""}\`;
        if (key !== ":" && seen.has(key)) {
          return { school: "", major: "" };
        }
        if (key !== ":") seen.add(key);
        return slot;
      }).slice(0, 10);
      while (loadedSlots.length < 10) {
        loadedSlots.push({ school: "", major: "" });
      }
      state.targetSlots = loadedSlots;
    }
    if (Array.isArray(profile.roadmapTargetSlots)) {
      const seen = new Set();
      let loadedSlots = profile.roadmapTargetSlots.map(slot => {
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
      state.roadmapTargetSlots = loadedSlots;
    }`;

  code = code.replace(oldLoadProfile, newLoadProfile);

  // D. Restore syncSelectedTargetsFromSlots back to 10
  code = code.replace(
    'state.selectedTargets = uniqueIds.slice(0, 7);',
    'state.selectedTargets = uniqueIds.slice(0, 10);'
  );

  // E. Update initializeTargetSlots
  code = code.replace(
    'function initializeTargetSlots() {\n  syncSelectedTargetsFromSlots();\n}',
    'function initializeTargetSlots() {\n  syncSelectedTargetsFromSlots();\n  syncSelectedRoadmapTargetsFromSlots();\n}'
  );

  // F. Insert syncSelectedRoadmapTargetsFromSlots and renderRoadmapTargetPicker
  const targetPickerEndMarker = 'function renderEligibilityResults() {';
  const pickersContent = `function syncSelectedRoadmapTargetsFromSlots() {
  const seen = new Set();
  state.roadmapTargetSlots.forEach((slot, index) => {
    const sName = slot.school?.trim();
    const mName = slot.major?.trim();
    if (sName && mName) {
      const key = \`\${normalizeText(sName)}:\${normalizeText(mName)}\`;
      if (seen.has(key)) {
        slot.school = "";
        slot.major = "";
        const schoolInput = qs(\`#roadmapTargetSchool\${index}\`);
        const majorInput = qs(\`#roadmapTargetMajor\${index}\`);
        if (schoolInput) schoolInput.value = "";
        if (majorInput) majorInput.value = "";
      } else {
        seen.add(key);
      }
    }
  });

  const ids = state.roadmapTargetSlots
    .map((slot) => {
      const match = programsForSchoolName(slot.school).find((program) => normalizeText(program.name) === normalizeText(slot.major));
      return match?.id;
    })
    .filter(Boolean);
  
  state.selectedRoadmapTargets = [...new Set(ids)];
  saveProfileToLocalStorage();
  buildRoadmap();
}

function renderRoadmapTargetPicker() {
  const container = qs("#roadmapTargetPicker");
  if (!container) return;
  container.innerHTML = \`
    \${state.roadmapTargetSlots
      .map((slot, index) => {
        return \\\`
          <div class="target-search-row">
            <span class="target-index">\${index + 1}</span>
            <div class="form-row search-field">
              <label for="roadmapTargetSchool\${index}">\\\${t("label_school")}</label>
              <input
                id="roadmapTargetSchool\${index}"
                type="text"
                data-roadmap-school="\${index}"
                value="\\\${escapeHtml(slot.school)}"
                placeholder="\\\${t("search_school_placeholder")}"
                autocomplete="off"
              />
              <div class="search-menu" data-roadmap-school-menu="\${index}"></div>
            </div>
            <div class="form-row search-field">
              <label for="roadmapTargetMajor\${index}">\\\${t("label_major")}</label>
              <input
                id="roadmapTargetMajor\${index}"
                type="text"
                data-roadmap-major="\${index}"
                value="\\\${escapeHtml(slot.major)}"
                placeholder="\\\${t("search_major_placeholder")}"
                autocomplete="off"
              />
              <div class="search-menu" data-roadmap-major-menu="\${index}"></div>
            </div>
          </div>
        \\\`;
      })
      .join("")}
  \`;

  const renderSchoolMenu = (index, query = "") => {
    const menu = qs(\`[data-roadmap-school-menu="\${index}"]\`);
    if (!menu) return;
    const normalizedQuery = normalizeText(query);
    const schools = uniqueSchools()
      .filter((school) => !normalizedQuery || normalizeText(school.name).includes(normalizedQuery))
      .slice(0, 80);
    menu.innerHTML = schools.length
      ? schools.map((school) => \`<button type="button" data-pick-roadmap-school="\${index}" data-value="\${escapeHtml(school.name)}">\${escapeHtml(school.name)}</button>\`).join("")
      : \`<div class="search-empty">\${t("search_empty")}</div>\`;
    menu.classList.add("open");
  };

  const renderMajorMenu = (index, query = "") => {
    const menu = qs(\`[data-roadmap-major-menu="\${index}"]\`);
    if (!menu) return;
    const normalizedQuery = normalizeText(query);
    const programs = programsForSchoolName(state.roadmapTargetSlots[index].school)
      .filter((program) => !normalizedQuery || normalizeText(program.name).includes(normalizedQuery))
      .slice(0, 120);
    menu.innerHTML = programs.length
      ? programs.map((program) => \`<button type="button" data-pick-roadmap-major="\${index}" data-value="\${escapeHtml(program.name)}">\${escapeHtml(program.name)}</button>\`).join("")
      : \`<div class="search-empty">\${state.roadmapTargetSlots[index].school ? t("search_empty") : t("search_select_school_first")}</div>\`;
    menu.classList.add("open");
  };

  const closeSearchMenus = () => qsa(".search-menu").forEach((menu) => menu.classList.remove("open"));

  qsa("[data-roadmap-school]").forEach((input) => {
    input.addEventListener("focus", () => renderSchoolMenu(Number(input.dataset.roadmapSchool), input.value));
    input.addEventListener("input", () => {
      const index = Number(input.dataset.roadmapSchool);
      state.roadmapTargetSlots[index].school = input.value;
      state.roadmapTargetSlots[index].major = "";
      const majorInput = qs(\`#roadmapTargetMajor\${index}\`);
      if (majorInput) majorInput.value = "";
      syncSelectedRoadmapTargetsFromSlots();
      renderSchoolMenu(index, input.value);
    });
  });

  qsa("[data-roadmap-major]").forEach((input) => {
    input.addEventListener("focus", () => renderMajorMenu(Number(input.dataset.roadmapMajor), input.value));
    input.addEventListener("input", () => {
      const index = Number(input.dataset.roadmapMajor);
      state.roadmapTargetSlots[index].major = input.value;
      syncSelectedRoadmapTargetsFromSlots();
      renderMajorMenu(index, input.value);
    });
  });

  container.addEventListener("mousedown", (event) => {
    const schoolButton = event.target.closest("[data-pick-roadmap-school]");
    const majorButton = event.target.closest("[data-pick-roadmap-major]");
    if (!schoolButton && !majorButton) return;
    event.preventDefault();
    if (schoolButton) {
      const index = Number(schoolButton.dataset.pickRoadmapSchool);
      state.roadmapTargetSlots[index].school = schoolButton.dataset.value;
      state.roadmapTargetSlots[index].major = "";
      qs(\`#roadmapTargetSchool\${index}\`).value = schoolButton.dataset.value;
      qs(\`#roadmapTargetMajor\${index}\`).value = "";
      closeSearchMenus();
    }
    if (majorButton) {
      const index = Number(majorButton.dataset.pickRoadmapMajor);
      state.roadmapTargetSlots[index].major = majorButton.dataset.value;
      qs(\`#roadmapTargetMajor\${index}\`).value = majorButton.dataset.value;
      closeSearchMenus();
    }
    syncSelectedRoadmapTargetsFromSlots();
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("#roadmapTargetPicker")) closeSearchMenus();
  });
}\n\nfunction renderEligibilityResults() {`;

  code = code.replace(targetPickerEndMarker, pickersContent);

  // G. Update init() placeholder translate loops and render calls
  const oldInitLoop = `  for (let i = 0; i < state.targetSlots.length; i++) {
    const sInput = qs(\`#targetSchool\${i}\`);
    const mInput = qs(\`#targetMajor\${i}\`);
    if (sInput) sInput.placeholder = t("search_school_placeholder", "Search School");
    if (mInput) mInput.placeholder = t("search_major_placeholder", "Search Major");
  }`;

  const newInitLoop = `  for (let i = 0; i < state.targetSlots.length; i++) {
    const sInput = qs(\`#targetSchool\${i}\`);
    const mInput = qs(\`#targetMajor\${i}\`);
    if (sInput) sInput.placeholder = t("search_school_placeholder", "Search School");
    if (mInput) mInput.placeholder = t("search_major_placeholder", "Search Major");
  }
  for (let i = 0; i < state.roadmapTargetSlots.length; i++) {
    const sInput = qs(\`#roadmapTargetSchool\${i}\`);
    const mInput = qs(\`#roadmapTargetMajor\${i}\`);
    if (sInput) sInput.placeholder = t("search_school_placeholder", "Search School");
    if (mInput) mInput.placeholder = t("search_major_placeholder", "Search Major");
  }`;

  code = code.replace(oldInitLoop, newInitLoop);

  code = code.replace(
    'renderTargetPicker();',
    'renderTargetPicker();\n  renderRoadmapTargetPicker();'
  );

  // H. Update buildRoadmap() to use state.selectedRoadmapTargets
  const oldBuildRoadmapStart = `function buildRoadmap() {
  const selectedPrograms = allPrograms().filter((p) => state.selectedTargets.includes(p.id));
  const noticeDiv = qs("#roadmapSelectedCountNotice");
  const targetRow = qs("#roadmapTargetRow");
  
  if (selectedPrograms.length > 0) {
    if (noticeDiv) {
      noticeDiv.classList.remove("hidden");
      const listNames = selectedPrograms.map(p => \`\${p.school.shortName} (\${p.name})\`).join(", ");
      qs("#roadmapNoticeDetails").textContent = t("roadmap_multi_notice_desc", "Merged prerequisites from: ") + listNames;
      qs("#roadmapNoticeHeader").textContent = t("roadmap_multi_notice_title", "Planning for multiple targets").replace("{count}", selectedPrograms.length);
    }
    if (targetRow) targetRow.classList.add("hidden");
  } else {
    if (noticeDiv) noticeDiv.classList.add("hidden");
    if (targetRow) targetRow.classList.remove("hidden");
  }

  const programsToPlan = selectedPrograms.length ? selectedPrograms : [allPrograms().find((item) => item.id === (qs("#roadmapTarget").value || allPrograms()[0]?.id))].filter(Boolean);
  if (programsToPlan.length === 0) return;`;

  const newBuildRoadmapStart = `function buildRoadmap() {
  const selectedPrograms = allPrograms().filter((p) => state.selectedRoadmapTargets.includes(p.id));
  const timeline = qs("#roadmapTimeline");
  if (!timeline) return;

  if (selectedPrograms.length === 0) {
    timeline.innerHTML = \`
      <div class="placeholder-view" style="color: var(--muted); text-align: center; padding: 40px 0; border: 1px dashed var(--line); border-radius: 12px; width: 100%;">
        <p>\\\${escapeHtml(t("no_targets_selected", "No target programs selected."))}</p>
      </div>
    \`;
    return;
  }

  const programsToPlan = selectedPrograms;`;

  code = code.replace(oldBuildRoadmapStart, newBuildRoadmapStart);

  if (hasCrlf) {
    code = code.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(appPath, code, 'utf8');
  console.log('[app.js] Dynamic roadmap slot changes applied.');
}
