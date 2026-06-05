import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const context = {
  window: {},
  document: {
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    addEventListener() {}
  },
  location: { hash: "" },
  console
};
vm.createContext(context);
vm.runInContext(read("transfer-data.js"), context);
vm.runInContext(read("course-catalog.js"), context);

const appSource = read("app.js").replace(/init\(\);\s*$/, "");
vm.runInContext(appSource, context);

const exportSource = `
  const rows = [];
  const programs = database.schools.flatMap((school) =>
    school.majors.map((major) => ({ ...major, school }))
  );

  for (const program of programs) {
    const summary = summarizeProgramCourses(program);
    const buckets = [
      ["required", summary.required.review],
      ["recommended", summary.recommended.review]
    ];

    for (const [requirementType, items] of buckets) {
      for (const item of items) {
        rows.push({
          school: program.school.name,
          major: program.name,
          requirementType,
          reason: item.reason || "원문 확인 필요",
          rawText: item.raw || String(item),
          suggestedAction: "",
          canonicalCourseId: "",
          canonicalCourseName: "",
          conditionType: "",
          reviewerNote: ""
        });
      }
    }
  }

  rows.sort((a, b) =>
    a.school.localeCompare(b.school) ||
    a.major.localeCompare(b.major) ||
    a.requirementType.localeCompare(b.requirementType) ||
    a.rawText.localeCompare(b.rawText)
  );

  globalThis.__reviewRows = rows;
`;
vm.runInContext(exportSource, context);

const rows = context.__reviewRows;
const headers = [
  "school",
  "major",
  "requirementType",
  "reason",
  "rawText",
  "suggestedAction",
  "canonicalCourseId",
  "canonicalCourseName",
  "conditionType",
  "reviewerNote"
];

const csvEscape = (value) => {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const csv = [headers.join(","), ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(","))].join("\n");
fs.writeFileSync(path.join(root, "needs-review-items.csv"), csv, "utf8");
fs.writeFileSync(path.join(root, "needs-review-items.json"), JSON.stringify(rows, null, 2), "utf8");

console.log(JSON.stringify({ rows: rows.length }, null, 2));
