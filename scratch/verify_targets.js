const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

const targets = [
  'disclaimer_title: "⚠️ IMPORTANT LEGAL DISCLAIMER',
  'disclaimer_body: "TransferChek is strictly a reference tool.',
  'alert_subscribed: "Successfully subscribed to the {plan}!",\n    btn_clear_courses: "Clear All"',
  'hero_title: "미국 명문 공대 편입을 위한 단 하나의 엔드투엔드 전략 엔진",\n    hero_lead: "요건 충족 확인부터 수강 로드맵, 합격 에세이까지 성공적인 공대 편입에 필요한 모든 것을 단 하나의 플랫폼에서 제공합니다."',
  'disclaimer_title: "⚠️ 중요 법적 면책 고지 및 서비스 제한 안내",\n    disclaimer_body: "TransferChek는 편입 지원을 돕기 위한 자가 진단 및 참고용 도구입니다.',
  'feature3_body: "편입 준비생과 1-2년 후 편입을 준비할 학생 모두를 위한 최적의 수강 설계도. 불필요한 과목을 수강하여 시간, GPA, 비싼 등록금을 낭비하지 않도록, 선수과목 연결고리를 고려한 가장 최단기 학기별 로드맵을 자동으로 빌드해 줍니다."',
  'tier_premium_desc: "AI 글쓰기까지 포함된 전체 치트키",',
  'alert_subscribed: "{plan} 구독이 성공적으로 완료되었습니다!",\n    btn_clear_courses: "전체 해제"',
  'disclaimer_title: "⚠️ 重要法律免责声明与服务限制通知",',
  'disclaimer_body: "TransferChek 仅作为转学 申请의 自我诊断 与 参考用',
  'tier_premium_desc: "涵盖 AI 写作的终极特权方案",',
  'alert_subscribed: "成功订阅了 {plan}！",\n    btn_clear_courses: "全部清除"'
];

targets.forEach(t => {
  let idx = content.indexOf(t.split('\n')[0]);
  if (idx !== -1) {
    console.log(`FOUND: ${t.split('\n')[0]}`);
    const lineNum = content.substring(0, idx).split('\n').length;
    console.log(`  Line: ${lineNum}`);
    // Print around 3 lines
    console.log(content.substring(idx, content.indexOf('\n', idx + 100)));
  } else {
    console.log(`NOT FOUND: ${t}`);
  }
});
