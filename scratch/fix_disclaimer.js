const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app.js');
let code = fs.readFileSync(filePath, 'utf8');

// Normalize line endings to LF
const hasCrlf = code.includes('\r\n');
if (hasCrlf) {
  code = code.replace(/\r\n/g, '\n');
}

// 1. Replace the disclaimer body using a robust wildcard regex
const genericDisclaimer = /disclaimer_body:\s*"Transfer Compass 仅作为[^"]+",/;
const newDisclaimer = 'disclaimer_body: "TransferChek 仅作为转学申请的自我诊断与参考工具。本服务不保证任何大学의录取、注册许可或特定의学术结果。平台提供的最低 GPA、先修课程、语言成绩等信息均收集自各大学官方公开资料，可能与实际标准存在偏差或发生滞后更新。申请人必须在正式提交申请前，自行在目标大学招生官网核实最新的招生简章、课程等效性及截止日期。对于因依赖本平台信息而导致的任何录取决策、学术规划错误或财务损失，本服务概不承担 any 法律责任。",';

if (genericDisclaimer.test(code)) {
  code = code.replace(genericDisclaimer, newDisclaimer);
  console.log('Successfully updated Chinese disclaimer body.');
} else {
  console.error('Failed to locate disclaimer body with robust regex.');
}

// 2. Replace the Chinese feedback block using a robust wildcard regex
const genericFeedback = /feedback_eyebrow:\s*"提出反馈意见"[\s\S]+?btn_clear:\s*"Clear",/;
const newZhFeedback = `feedback_eyebrow: "提出反馈意见",
    feedback_title: "参与 TransferChek 改进",
    feedback_desc: "您的意见是完全匿名的，且仅保存在本地浏览器中。平台管理员会定期查看并用于修正遗漏的课程数据。",
    label_feedback_input: "反馈内容",
    btn_submit_feedback: "提交反馈",
    btn_inbox: "收到的反馈收件箱",
    inbox_title: "匿名反馈收件箱（本地）",
    btn_clear: "清空",
    feedback_empty_alert: "请在提交前输入反馈内容。",
    feedback_sending: "正在发送反馈...",
    feedback_success: "谢谢！您的反馈已成功发送。",
    feedback_failed: "反馈提交失败：",`;

if (genericFeedback.test(code)) {
  code = code.replace(genericFeedback, newZhFeedback);
  console.log('Successfully updated Chinese feedback block.');
} else {
  console.error('Failed to locate Chinese feedback block with robust regex.');
}

// Convert back to CRLF if the original file had it
if (hasCrlf) {
  code = code.replace(/\n/g, '\r\n');
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('fix_disclaimer.js complete.');
