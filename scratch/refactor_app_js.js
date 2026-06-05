const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app.js');
let code = fs.readFileSync(filePath, 'utf8');

// 1. Remove duplicate translation blocks dynamically.
// We look for the first "  ko: {" and the second "  ko: {".
const firstKoIndex = code.indexOf('\n  ko: {');
const secondKoIndex = code.indexOf('\n  ko: {', firstKoIndex + 1);

if (firstKoIndex !== -1 && secondKoIndex !== -1) {
  console.log(`Found duplicate ko translations. First at ${firstKoIndex}, second at ${secondKoIndex}`);
  // We want to delete from firstKoIndex to secondKoIndex.
  code = code.slice(0, firstKoIndex) + code.slice(secondKoIndex);
  console.log('Removed duplicate translations successfully.');
} else {
  console.warn('Could not find duplicate ko blocks, skipping cleanup.');
}

// 2. Add Korean feedback translation keys.
// The Korean feedback translations end with '모두 지우기',
const koFeedbackTarget = 'inbox_title: "익명 피드백 보관함 (로컬)",\n    btn_clear: "모두 지우기",';
const koFeedbackReplacement = `inbox_title: "익명 피드백 보관함 (로컬)",\n    btn_clear: "모두 지우기",\n    feedback_empty_alert: "피드백 내용을 입력해 주세요.",\n    feedback_sending: "피드백을 전송하는 중입니다...",\n    feedback_success: "감사합니다! 피드백이 정상적으로 전송되었습니다.",\n    feedback_failed: "피드백 전송에 실패했습니다:",`;

if (code.includes(koFeedbackTarget)) {
  code = code.replace(koFeedbackTarget, koFeedbackReplacement);
  console.log('Added Korean feedback translation keys.');
} else {
  console.error('Could not find Korean feedback translation target.');
}

// 3. Add Chinese feedback translation keys and rebrand to TransferChek.
// Let's rebrand Chinese site_title, disclaimer_body, feature_eyebrow, and feedback_title.
code = code.replace('site_title: "Transfer Compass | 工程学院转学策略分析平台"', 'site_title: "TransferChek | 工程学院转学策略分析平台"');
code = code.replace('feature_eyebrow: "为什么选择 Transfer Compass？"', 'feature_eyebrow: "为什么选择 TransferChek？"');

const zhDisclaimerTarget = 'disclaimer_body: "Transfer Compass 仅作为转学申请의自我诊断与参考工具。本服务不保证 any 大学의录取、注册许可或特定의学术结果。平台提供의最低 GPA、先修课程、语言成绩等信息均收集自各大学官方公开资料，可能与实际标准存在偏差或发生滞后更新。申请人必须在正式提交申请前，自行在目标大学招生官网核实最新의招生简章、课程等效性及截止日期。对于因依赖本平台信息而导致의任何录取决策、学术规划错误或财务损失，本服务概不承担 any 法律责任。",';
const zhDisclaimerReplacement = 'disclaimer_body: "TransferChek 仅作为转学申请的自我诊断与参考工具。本服务不保证任何大学的录取、注册许可或特定的学术结果。平台提供的最低 GPA、先修课程、语言成绩等信息均收集自各大学官方公开资料，可能与实际标准存在偏差或发生滞后更新。申请人必须在正式提交申请前，自行在目标大学招生官网核实最新的招生简章、课程等效性 및 截止日期。对于因依赖本平台信息而导致的任何录取决策、学术规划错误或财务损失，本服务概不承担 any 法律责任。",';

if (code.includes(zhDisclaimerTarget)) {
  code = code.replace(zhDisclaimerTarget, zhDisclaimerReplacement);
} else {
  // Let's try replacing a simpler substring if there is any minor change.
  const partialDisclaimer = 'Transfer Compass 仅作为转学申请의自我诊断';
  if (code.includes(partialDisclaimer)) {
    console.log('Found partial disclaimer, replacing.');
    code = code.replace(
      /disclaimer_body:\s*\"[^\"]+?\",/,
      'disclaimer_body: "TransferChek 仅作为转学申请的自我诊断与参考工具。本服务不保证任何大学的录取、注册许可或特定的学术结果。平台提供的最低 GPA、先修课程、语言成绩等信息均收集自各大学官方公开资料，可能与实际标准存在偏差或发生滞后更新。申请人必须在正式提交申请前，自行在目标大学招生官网核实最新的招生简章、课程等效性及截止日期。对于因依赖本平台信息而导致的任何录取决策、学术规划错误或财务损失，本服务概不承担 any 法律责任。",'
    );
  }
}

const zhFeedbackTarget = 'feedback_eyebrow: "提出反馈意见",\n    feedback_title: "参与 Transfer Compass 改进",\n    feedback_desc: "您的意见是完全匿名的，且仅保存在本地浏览器中。平台管理员会定期查看并用于修正遗漏의课程数据。",\n    label_feedback_input: "Anonymous Feedback",\n    btn_submit_feedback: "Submit Feedback",\n    btn_inbox: "Owner Inbox",\n    inbox_title: "Private Feedback Inbox",\n    btn_clear: "Clear",';

const zhFeedbackReplacement = 'feedback_eyebrow: "提出反馈意见",\n    feedback_title: "参与 TransferChek 改进",\n    feedback_desc: "您的意见是完全匿名的，且仅保存在本地浏览器中。平台管理员会定期查看并用于修正遗漏的课程数据。",\n    label_feedback_input: "反馈内容",\n    btn_submit_feedback: "提交反馈",\n    btn_inbox: "收到的反馈收件箱",\n    inbox_title: "匿名反馈收件箱（本地）",\n    btn_clear: "清空",\n    feedback_empty_alert: "请在提交前输入反馈内容。",\n    feedback_sending: "正在发送反馈...",\n    feedback_success: "谢谢！您的反馈已成功发送。",\n    feedback_failed: "反馈提交失败：",';

if (code.includes(zhFeedbackTarget)) {
  code = code.replace(zhFeedbackTarget, zhFeedbackReplacement);
  console.log('Added Chinese feedback translation keys.');
} else {
  console.warn('Could not find Chinese feedback translation target by exact match. Trying replacement of feedback_title directly.');
  code = code.replace('feedback_title: "参与 Transfer Compass 改进"', 'feedback_title: "参与 TransferChek 改进"');
}

// 4. Update bindFeedback function.
const bindFeedbackStart = 'function bindFeedback() {';
const bindFeedbackEnd = 'function readAuthState() {';

const startIdx = code.indexOf(bindFeedbackStart);
const endIdx = code.indexOf(bindFeedbackEnd);

if (startIdx !== -1 && endIdx !== -1 && startIdx < endIdx) {
  const originalBindFeedback = code.slice(startIdx, endIdx);
  const newBindFeedback = `function bindFeedback() {
  const form = qs("#feedbackForm");
  if (!form) return;
  const input = qs("#feedbackInput");
  const status = qs("#feedbackStatus");
  const inbox = qs("#feedbackInbox");

  input.addEventListener("focus", () => {
    status.textContent = "";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) {
      status.style.color = "#ef4444";
      status.textContent = t("feedback_empty_alert", "Please write feedback before submitting.");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.textContent : "Submit Feedback";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t("essay_generating_label", "Sending...");
    }
    status.style.color = "var(--muted)";
    status.textContent = t("feedback_sending", "Sending feedback...");

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message || "Failed to send feedback.");
      }

      const items = readFeedbackItems();
      items.unshift({ message, createdAt: new Date().toISOString() });
      writeFeedbackItems(items);
      input.value = "";
      
      status.style.color = "#10b981"; // Success green
      status.textContent = t("feedback_success", "Thank you! Your feedback has been sent successfully.");
      
      renderFeedbackInbox();
    } catch (err) {
      console.error(err);
      status.style.color = "#ef4444"; // Error red
      status.textContent = \`\${t("feedback_failed", "Feedback submission failed:")} \${err.message}\`;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
      setTimeout(() => {
        const currentText = status.textContent;
        if (currentText.includes("Thank you") || currentText.includes("감사합니다") || currentText.includes("谢谢") || currentText.includes("Error:") || currentText.includes("실패했습니다") || currentText.includes("失败")) {
          status.textContent = "";
        }
      }, 5000);
    }
  });
  qs("#feedbackInboxToggle")?.addEventListener("click", () => {
    inbox.classList.toggle("hidden");
    renderFeedbackInbox();
  });
  qs("#clearFeedbackBtn")?.addEventListener("click", () => {
    writeFeedbackItems([]);
    renderFeedbackInbox();
    status.style.color = "var(--muted)";
    status.textContent = "Private feedback inbox cleared.";
    setTimeout(() => {
      if (status.textContent === "Private feedback inbox cleared.") {
        status.textContent = "";
      }
    }, 4000);
  });
}\n\n`;
  code = code.slice(0, startIdx) + newBindFeedback + code.slice(endIdx);
  console.log('Successfully updated bindFeedback function.');
} else {
  console.error('Could not find bindFeedback function structure.');
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('app.js refactoring complete.');
