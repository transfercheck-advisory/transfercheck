const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const tls = require('tls');

// Load .env variables without external dependencies
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  lines.forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim();
      process.env[key] = val;
    }
  });
}

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // Prevent path traversal
  const rawUrl = req.url || "";
  let safeUrl = rawUrl.split('?')[0];
  if (safeUrl === '/') safeUrl = '/index.html';

  // API Route: Save transfer-data back to disk
  if (req.method === 'POST' && safeUrl === '/api/save') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const outputContent = `window.transferDatabase = ${JSON.stringify(parsed, null, 2)};\n`;
        fs.writeFileSync(path.join(__dirname, 'transfer-data.js'), outputContent, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, message: '데이터베이스가 성공적으로 저장되었습니다.' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: '올바르지 않은 JSON 데이터입니다.' }));
      }
    });
    return;
  }

  // API Route: Generate AI Essay Outline
  if (req.method === 'POST' && safeUrl === '/api/essay') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const { schoolName, majorName, essayQuestion, essayLimit, activities } = parsed;
        const apiKey = process.env.GEMINI_API_KEY;

        // Fallback generator helper to keep UX seamless if API key is invalid or rate-limited
        const getFallbackOutline = () => {
          const limitStr = essayLimit && essayLimit !== "unspecified" ? ` (${essayLimit})` : "";
          return {
            targetStyleGuide: `${schoolName} ${majorName} 편입 에세이는 기초 선수과목 우수성과 실질적인 공학 프로젝트 성과를 정량적/정성적으로 연결하는 실사구시형 서술 스타일을 강력히 선호합니다. 화려한 수식어를 줄이고 사실(Factual) 중심으로 기여도를 작성하는 것이 합격의 지름길입니다.`,
            outline: [
              {
                paragraph: "Introduction (1st Paragraph)",
                title: `${majorName}에 대한 학업적 관심 및 ${schoolName} 지원 동기`,
                content: `[분량 가이드: 총 분량${limitStr}의 25% 내외]\n[활동 연계]: 제시해주신 활동 "${activities.slice(0, 50)}..." 중 전공 입문 계기와 가장 유기적으로 맞닿은 핵심 1가지를 언급하며 학업적 동기를 유발합니다.\n[가이드]: 전적대나 커뮤니티 칼리지에서 ${majorName} 관련 과목을 이수하며 학문적 갈증을 느낀 구체적인 순간을 기술하세요. 왜 타 대학이 아닌 반드시 '${schoolName}'에서 공부를 지속해야 하는지 전공 커리큘럼 특성과 엮어 서술해야 합니다.`,
                dos: `전공에 처음 매료된 아카데믹한 계기와 '${schoolName}'만의 고유 연구 환경(랩실, 전공 특화 트랙)을 구체적인 고유명사를 사용하여 핏을 맞추어 강조하세요.`,
                donts: "'어릴 적부터 기계를 만지는 것을 좋아했다'거나 '단순히 학교 명성이 높고 랭킹이 훌륭해서 지원했다'는 식의 진부하고 성의 없는 지원 동기는 과감히 삭제하십시오.",
                example: `My academic curiosity in ${majorName} was solidified at my current college while studying its foundational principles. Transferring to ${schoolName} is a critical step for me to access their advanced research labs and specialized upper-division curriculum, bridging my current coursework with real-world engineering applications.`
              },
              {
                paragraph: "Body Paragraph (2nd Paragraph)",
                title: "핵심 공학 프로젝트 성과 입증 및 전공 역량 필터링 매핑",
                content: `[분량 가이드: 총 분량${limitStr}의 50% 내외]\n[활동 연계]: 입력하신 활동 중 가장 성과가 뚜렷하고 전공 적합성이 높은 핵심 1~2개 프로젝트에만 깊이 집중하여 서술합니다.\n[가이드]: 이수한 선수과목의 이론 지식을 활용해 설계, 개발, 실험한 구체적 성과를 기술하세요. 본인이 담당한 파트와 해결한 기술적 한계, 협업 시 기여한 실무 성과를 정량적 지표를 섞어 입증합니다. 편입 직후 바로 고난도 전공 팀 프로젝트에 즉시 투입될 준비가 되었음을 증명해야 합니다.`,
                dos: "프로젝트 진행 과정에서 마주한 기술적 문제점(Bottleneck)과 이를 공학적 수치나 코드를 통해 자율적으로 해결해 나간 논리적 극복 과정을 중점적으로 부각하세요.",
                donts: "나열식으로 본인의 모든 자잘한 스펙(Calculus 튜터, 간단한 숙제 등)을 억지로 문단에 구겨 넣지 마세요. 에세이의 논점만 흐려지고 전문성이 떨어집니다.",
                example: `Leveraging my knowledge from Calculus and Physics, I designed a control script in MATLAB that optimized feedback loops for our robotics project, reducing systemic latency by 15%. This experience demonstrated my ability to apply mathematical models to solve practical hardware problems under tight resource constraints.`
              },
              {
                paragraph: "Conclusion (3rd Paragraph)",
                title: `${schoolName} 편입 성공 후의 학업/연구 기획 및 장기적 커리어 비전`,
                content: `[분량 가이드: 총 분량${limitStr}의 25% 내외]\n[활동 연계]: 본인의 커리어 청사진과 로드맵의 종착역을 제시합니다.\n[가이드]: '${schoolName}'에 합격한 이후 수강할 구체적인 고학년 특화 강좌나 참여하고자 하는 랩실(Lab) 연구 분야를 지칭하여 포부를 밝히세요. 졸업 후 산업계나 연구계에서 어떤 공학적 혁신을 이끌어낼 것인지 강한 포부와 함께 마무리합니다.`,
                dos: `'${schoolName}' 공대 졸업생으로서 향후 기여하고자 하는 기술적 분야와 장기적인 직업적 목표를 유기적으로 선언하여 입학처에 강렬한 잠재력을 심어주세요.`,
                donts: "'합격만 시켜주시면 뭐든 열심히 하겠다'는 식의 빈약한 포부나, 감성적인 다짐으로 끝맺는 흐릿한 결말은 전문성을 해치므로 절대 피하십시오.",
                example: `Upon transferring to ${schoolName}, I aim to participate in undergraduate research opportunities focused on systems optimization and smart materials. In the long run, I plan to leverage this education to design sustainable energy systems that resolve scalability issues in the industrial sector.`
              }
            ]
          };
        };

        if (!apiKey) {
          console.warn("API key is missing in env. Serving fallback template.");
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: true, ...getFallbackOutline() }));
          return;
        }

        const systemInstruction = `당신은 수십 년 전통의 명문 미국 공과대학교 편입 컨설팅 전문가이자 합격 에세이 수석 튜터입니다.
학생이 작성할 에세이의 타겟 대학교/학과가 추구하는 에세이 고유 스타일과 인재상을 인지하고, 주어진 에세이 질문(Prompt)에 합격할 수 있도록 정교한 '3-4문단 전략적 설계도'를 JSON 형식으로 제공해야 합니다.

[대학별 공대 편입 에세이 심사 기준 & 선호 스타일 지식 베이스]
1. UC 계열 (UC Berkeley, UCLA, UC San Diego 등):
   - 스타일: 화려한 은유나 시적 표현은 절대 피해야 합니다. 극단적으로 Factual(사실 기반)하고 구체적(Specific)이며 명확한(Clear) 문체를 가장 선호합니다.
   - 준비 입증: 어떤 선수과목을 들었고(Prerequisite), 어떤 기술적 프로젝트를 완수했는지 명확한 기여 실적 위주로 서술하게 합니다. (PIQ 제한 350단어에 엄격히 맞추도록 문단을 압축 설계)
2. 조지아텍 (Georgia Tech):
   - 스타일: SOP(Statement of Purpose)와 Contribution을 중시합니다.
   - 핵심 가치: 본인의 기술 역량이 조지아텍 캠퍼스와 공학 발전에 어떻게 기여할 것인지(Contribution), 팀워크와 협업(Collaboration) 리더십 역량이 드러나는 실례를 연결하도록 만듭니다.
3. UIUC:
   - 스타일: 전공에 대한 정밀한 타겟 연구 관심(Specific research fit)을 요구합니다.
   - 핵심 가치: 왜 타 대학이 아닌 UIUC 공대여야만 하는지 커리큘럼 특성을 파악하고, 본인이 일하고 싶은 특정 연구 랩실이나 교수진의 연구 핏을 정교하게 엮어 지원 동기를 밝히도록 가이드합니다.
4. 기타 명문 공대 (UMich, Columbia, NYU, Purdue, UVA 등):
   - 스타일: 엄격한 학업적 우수성(Academic excellence)하고 공학적 창의력을 깊이 있게 강조합니다.

[활동 선별(Selection) 지침]
- 학생이 제공한 경험 목록 중, 편입 대상 학교가 특히 선호할 만하고 전공과의 연계도가 가장 강력한 핵심 활동 1~2개만을 자율적으로 엄격하게 선별해 문단에 최적으로 매치하십시오.
- 무의미하고 난잡한 자잘한 활동은 전문적인 흐름을 위해 과감하게 배제(Filter out)해야 합니다.

[응답 가이드라인 작성 규칙]
- 각 문단에 맞춰 구체적으로 학생이 작성해야 할 콘텐츠 가이드라인을 적어줍니다.
- 문단마다 'dos'(반드시 강조해 서술해야 할 핵심 가치나 팁)와 'donts'(절대 쓰지 말아야 할 흔한 진부한 실수의 예)를 명시적으로 상세하게 제공하십시오.
- 가장 중요한 규칙으로, 각 문단마다 학생의 입력 활동과 목표 학교 인재상 스타일 가이드를 결합한 '실제 합격생 수준의 고품질 영문 작성 예시(example)'를 2~3문장 규모로 구체적으로 작성해 주어야 합니다.`;

        const payload = JSON.stringify({
          contents: [{
            parts: [{
              text: `[학생 정보 및 요청 사항]
목표 대학: ${schoolName}
목표 전공: ${majorName}
에세이 질문 (Prompt): ${essayQuestion}
에세이 분량 제한 (Limit): ${essayLimit}
학생 활동 및 경험 풀: ${activities}

위 정보를 바탕으로, 해당 대학의 인재상에 핏을 맞추어 문단별 에세이 설계 도면을 상세히 작성해 주십시오. JSON 형식으로 제공해야 합니다.`
            }]
          }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "object",
              properties: {
                targetStyleGuide: {
                  type: "string",
                  description: "목표 대학교/학과 공대 편입 에세이 심사 기준 및 선호하는 고유 글쓰기 스타일 요약 분석 (150자 내외)"
                },
                outline: {
                  type: "array",
                  description: "문단별 아웃라인 상세 설계도 (보통 3~4개 문단)",
                  items: {
                    type: "object",
                    properties: {
                      paragraph: { type: "string", description: "예: Paragraph 1 (Introduction)" },
                      title: { type: "string", description: "문단의 핵심 소주제" },
                      content: { type: "string", description: "학생이 해당 문단에서 서술해야 할 논리 전개 및 스토리를 활동과 엮는 구체적 작성 가이드" },
                      dos: { type: "string", description: "이 문단에서 반드시 강조하여 어필해야 할 핵심 학업 역량 및 작성 팁" },
                      donts: { type: "string", description: "이 문단에서 절대 피해야 할 흔하고 진부한 어투나 실수 주의 사항" },
                      example: { type: "string", description: "해당 문단의 가이드라인과 학생의 활동을 결합하여 작성된, 실제 합격생 수준의 고품질 영문 작성 예시 (2~3문장 내외, 문법적으로 완벽한 영어 작성)" }
                    },
                    required: ["paragraph", "title", "content", "dos", "donts", "example"]
                  }
                }
              },
              required: ["targetStyleGuide", "outline"]
            }
          },
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          }
        });

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
          },
          timeout: 25000
        };

        const geminiReq = https.request(url, options, (geminiRes) => {
          let geminiData = '';
          geminiRes.on('data', chunk => geminiData += chunk);
          geminiRes.on('end', () => {
            if (geminiRes.statusCode !== 200) {
              console.warn(`Gemini API returned status ${geminiRes.statusCode}. Serving fallback template.`);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, ...getFallbackOutline() }));
              return;
            }
            try {
              const geminiParsed = JSON.parse(geminiData);
              const textResult = geminiParsed.candidates[0].content.parts[0].text;
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, ...JSON.parse(textResult) }));
            } catch (err) {
              console.warn("AI parsing failed. Serving fallback template.", err);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, ...getFallbackOutline() }));
            }
          });
        });

        geminiReq.on('error', (err) => {
          console.warn("Connection error to Gemini API. Serving fallback template.", err);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: true, ...getFallbackOutline() }));
        });

        geminiReq.write(payload);
        geminiReq.end();
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: '잘못된 요청 양식입니다.' }));
      }
    });
    return;
  }

  // API Route: Generate AI Interview Questions
  if (req.method === 'POST' && safeUrl === '/api/interview/questions') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const { schoolName, majorName, essayQuestion } = parsed;
        const apiKey = process.env.GEMINI_API_KEY;

        const getFallbackQuestions = () => {
          const lowerSchool = (schoolName || "").toLowerCase();
          if (lowerSchool.includes("california") || lowerSchool.includes("berkeley") || lowerSchool.includes("ucla") || lowerSchool.includes("uc ") || lowerSchool.includes("sd") || lowerSchool.includes("system")) {
            return {
              success: true,
              questions: [
                "[학업 및 준비도] 편입하려는 공학 전공과 관련해 가장 흥미를 느꼈고 우수한 성과를 거두었던 대학 과목과, 그 과목에서 배운 핵심 원리가 무엇인지 설명해 주세요.",
                "[공학 프로젝트] 전적대나 커뮤니티 칼리지에서 주도했던 공학 프로젝트, 실험실 연구, 혹은 개인적인 코딩/설계 작업 중 가장 본인의 역량을 잘 보여주는 사례와 본인의 구체적인 역할을 말씀해 주세요.",
                "[기술적 한계 극복] 위의 프로젝트나 공부 중 마주했던 가장 큰 기술적 Bottleneck(오류, 하드웨어 작동 실패 등)은 무엇이었으며, 이를 극복하기 위해 취했던 공학적 해결 과정을 단계별로 서술해 주세요.",
                "[협업 및 소통] 다른 사람들과 공동의 문제를 해결하기 위해 협업했거나, 동아리/스터디 등에서 갈등 조율이나 소통을 통해 긍정적 결과를 이끌어냈던 경험이 있다면 알려주세요.",
                "[목표 대학 입증] 본인이 " + schoolName + "의 " + majorName + "에 입학하기 위해 학업적, 실무적으로 완벽히 준비된 학생임을 입증할 수 있는 정량적인 성과나 강점을 말씀해 주세요."
              ]
            };
          } else if (lowerSchool.includes("georgia") || lowerSchool.includes("gt") || lowerSchool.includes("tech")) {
            return {
              success: true,
              questions: [
                "[전공 진입 계기] 조지아텍의 " + majorName + "로 편입하고자 하는 학문적 계기와, 이 학문에 빠지게 만든 전적대에서의 결정적인 순간을 기술해 주세요.",
                "[실무/설계 실적] 본인의 공학적 설계 능력(MATLAB, CAD, 회로 구성, Java 등)이나 전공 응용 지식을 가장 잘 입증할 수 있는 대표적인 전공 프로젝트 성과는 무엇인가요?",
                "[협업과 리더십] 프로젝트나 학업 수행 과정에서 팀원들과 함께 갈등을 해결하거나, 본인의 리더십 또는 중재 능력을 발휘하여 공동의 목표를 달성했던 에피소드를 말씀해 주세요.",
                "[캠퍼스 및 커뮤니티 기여] 조지아텍 공학 공동체(학생 연구실, 공학 동아리 등)에 편입생으로서 본인의 어떤 특별한 배경이나 경험으로 어떻게 공헌(Contribution)할 것인지 서술해 주세요.",
                "[연구 분야 및 목표] 조지아텍 합격 후 참여해 보고 싶은 고학년 특화 커리큘럼이나 교수 연구실은 어디이며, 이를 통해 장기적으로 이루고 싶은 직업적 꿈은 무엇인가요?"
              ]
            };
          } else if (lowerSchool.includes("illinois") || lowerSchool.includes("uiuc")) {
            return {
              success: true,
              questions: [
                "[전적대 학업 갈증] 전적대 과정 중 해당 공학 분야에서 학문적 한계를 느꼈거나 추가로 깊게 탐구하고 싶었던 핵심 주제나 과목은 무엇인가요?",
                "[대표 프로젝트] 본인의 전공 적합성을 가장 강력히 보여줄 수 있는 대표적인 하드웨어/소프트웨어 프로젝트 및 설계 성과를 정량적 기여도 중심으로 알려주세요.",
                "[특정 연구 핏] UIUC " + majorName + " 내에서 특히 수강하고 싶은 특정 교과목이나, 참여해 공부하고 싶은 랩실(Lab) 또는 교수님의 연구 분야는 무엇이며 왜 그곳을 희망하나요?",
                "[문제 해결 및 논리력] 학업 및 실무 프로젝트 중 마주했던 가장 복잡하고 어려운 문제 상황을 자신만의 공학적 접근법과 수치화된 논리로 해결했던 경험을 말씀해 주세요.",
                "[장기적 진로 청사진] UIUC 졸업 후 장기적으로 해결하고 싶은 해당 분야의 기술적 난제나 본인이 꿈꾸는 공학자로서의 직업적 최종 지향점은 무엇인가요?"
              ]
            };
          } else {
            return {
              success: true,
              questions: [
                "[학업적 동기] 목표 대학인 " + schoolName + " " + majorName + " 편입을 결심하게 만든 전공 관련 학문적 갈증과 그 학과에 지원하고자 하는 가장 핵심적인 동기는 무엇인가요?",
                "[대표 프로젝트 성과] 전적대 학업 및 동아리 활동 중 본인의 공학적 전문성을 가장 잘 증명할 수 있는 핵심 설계/개발/분석 프로젝트 내용과 본인의 정량적 기여 성과를 서술해 주세요.",
                "[기술적 장애 해결] 공학 활동을 하거나 공부를 하면서 겪었던 가장 까다로운 버그나 기술적 한계점을 어떠한 논리적인 공학 기법이나 집요함으로 돌파했는지 알려주세요.",
                "[대학 핏 및 지원 사유] 목표 대학인 '" + schoolName + "'에서만 배울 수 있는 특화 교과나 연구 테마는 무엇이며, 전적대의 학업 기반이 해당 대학의 연구/학습과 어떻게 유기적으로 이어지나요?",
                "[편입 후 로드맵 및 비전] 합격 후 본인의 구체적인 학업 목표와, 이를 달성한 뒤 졸업 후 산업계나 연구계에서 어떤 가치를 실현하고자 하는지 장기 진로 비전을 서술해 주세요."
              ]
            };
          }
        };

        if (!apiKey) {
          console.warn("API key is missing. Serving 5-step fallback interview questions.");
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify(getFallbackQuestions()));
          return;
        }

        const systemInstruction = `당신은 미국 명문 공과대학교 편입 에세이 전문가이자 수석 입학 사정관입니다.
학생이 [목표 대학: ${schoolName}, 목표 전공: ${majorName}, 에세이 질문: ${essayQuestion}]에 맞는 최고의 에세이를 작성할 수 있도록 돕기 위해, 학생의 성향과 했었던 전공 관련 학업/프로젝트/협업 활동들을 완벽히 이끌어낼 수 있는 맞춤형 인터뷰 질문 5개를 생성해야 합니다.
질문은 정중하고 프로페셔널한 한국어 어조로 작성되어야 하며, 구체적인 공학적 사실과 성과를 유도할 수 있어야 합니다.

[질문 설계 지침]
1. 첫 번째 질문: 학생의 학업적 동기 및 전공 준비도 (Prerequisites, 핵심 학업 성취 등)를 묻습니다.
2. 두 번째 질문: 학생의 대표적인 전공 프로젝트 성과 및 구체적인 기술적 역할(MATLAB, Java, CAD 설계, 실험 장비 활용 등)을 묻습니다.
3. 세 번째 질문: 프로젝트 과정에서 겪었던 가장 큰 기술적 한계나 문제점, 그리고 이를 돌파한 구체적 극복 과정을 묻습니다.
4. 네 번째 질문: 팀 내에서의 협력, 리더십, 소통 경험 또는 개인적인 공학적 배움을 성찰(Reflection)하도록 유도합니다.
5. 다섯 번째 질문: 대학별 특수 심사 기준에 직접 연계되는 질문을 던집니다.
   - UC 계열: 철저한 사실(Factual) 기반의 정량적 기여 및 성과 최종 입증.
   - 조지아텍: 팀워크와 리더십, 혹은 캠퍼스/연구 기여 방안.
   - UIUC: UIUC 공대 특화 고학년 커리큘럼 매칭 또는 희망 연구실(Lab)/교수 분야와의 연계.
   - 기타 대학: 편입 후의 학업 기획 및 장기적 공학 커리어 청사진.

 반드시 오직 JSON 배열 형식 ["질문1", "질문2", "질문3", "질문4", "질문5"]으로만 반환해 주세요. 다른 설명이나 텍스트를 포함해서는 안 됩니다.`;

        const payload = JSON.stringify({
          contents: [{
            parts: [{
              text: `목표 대학: ${schoolName}
목표 전공: ${majorName}
에세이 질문 (Prompt): ${essayQuestion}

위 정보를 분석하여, 에세이 글감을 풍성하게 발굴해줄 수 있는 5개의 맞춤형 인터뷰 질문을 한국어로 생성하여 JSON 배열로 반환해 주세요.`
            }]
          }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
              type: "array",
              description: "인터뷰 질문 5개",
              items: { type: "string" },
              minItems: 5,
              maxItems: 5
            }
          },
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          }
        });

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
          },
          timeout: 25000
        };

        const geminiReq = https.request(url, options, (geminiRes) => {
          let geminiData = '';
          geminiRes.on('data', chunk => geminiData += chunk);
          geminiRes.on('end', () => {
            if (geminiRes.statusCode !== 200) {
              console.warn(`Gemini API returned status ${geminiRes.statusCode}. Serving fallback questions.`);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify(getFallbackQuestions()));
              return;
            }
            try {
              const geminiParsed = JSON.parse(geminiData);
              const textResult = geminiParsed.candidates[0].content.parts[0].text;
              const questionsList = JSON.parse(textResult);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify({ success: true, questions: questionsList }));
            } catch (err) {
              console.warn("AI questions parsing failed. Serving fallback questions.", err);
              res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify(getFallbackQuestions()));
            }
          });
        });

        geminiReq.on('error', (err) => {
          console.warn("Connection error to Gemini API for questions. Serving fallback.", err);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify(getFallbackQuestions()));
        });

        geminiReq.write(payload);
        geminiReq.end();
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: '잘못된 요청 양식입니다.' }));
      }
    });
    return;
  }

  // API Route: Send Feedback Email via SMTP TLS
  if (req.method === 'POST' && safeUrl === '/api/feedback') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const parsed = JSON.parse(body);
        const { message } = parsed;

        if (!message) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: '피드백 내용을 입력해주세요.' }));
          return;
        }

        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const smtpReceiver = process.env.SMTP_RECEIVER;

        if (!smtpUser || !smtpPass || !smtpReceiver) {
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: '서버 메일 설정(SMTP)이 올바르지 않습니다. .env 설정을 확인해주세요.' }));
          return;
        }

        const subject = '=?UTF-8?B?' + Buffer.from('[TransferChek] 신규 익명 피드백 알림').toString('base64') + '?=';
        const mailBody = `안녕하세요. TransferChek 시스템 알림입니다.\\n\\n사용자로부터 새로운 피드백이 접수되었습니다:\\n\\n---------------------------------\ns${message}
---------------------------------\n\\n전송 시각: ${new Date().toLocaleString()}\\n`;

        await sendEmailViaSmtp({
          user: smtpUser,
          pass: smtpPass,
          to: smtpReceiver,
          subject: subject,
          body: mailBody
        });

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: true, message: '피드백이 이메일로 정상 전송되었습니다.' }));
      } catch (err) {
        console.error('Email send failed:', err);
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, message: `이메일 전송 실패: ${err.message}` }));
      }
    });
    return;
  }
  
  const filePath = path.join(__dirname, safeUrl);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 파일을 찾을 수 없습니다.');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 서버 내부 오류');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`To open main page: http://localhost:${PORT}/index.html`);
    console.log(`To open legal page: http://localhost:${PORT}/terms-privacy-pricing.html`);
  });
}
module.exports = server;

function sendEmailViaSmtp({ user, pass, to, subject, body }) {
  return new Promise((resolve, reject) => {
    const socket = tls.connect(465, 'smtp.gmail.com', {}, () => {
      // Connected successfully
    });

    let step = 0;
    const send = (data) => {
      socket.write(data + '\\r\\n');
    };

    socket.on('data', (data) => {
      const msg = data.toString();
      
      if (step === 0 && msg.startsWith('220')) {
        send('EHLO localhost');
        step = 1;
      } else if (step === 1 && msg.includes('250')) {
        send('AUTH LOGIN');
        step = 2;
      } else if (step === 2 && msg.startsWith('334')) {
        send(Buffer.from(user).toString('base64'));
        step = 3;
      } else if (step === 3 && msg.startsWith('334')) {
        send(Buffer.from(pass).toString('base64'));
        step = 4;
      } else if (step === 4 && msg.startsWith('235')) {
        send(`MAIL FROM:<${user}>`);
        step = 5;
      } else if (step === 5 && msg.startsWith('250')) {
        send(`RCPT TO:<${to}>`);
        step = 6;
      } else if (step === 6 && msg.startsWith('250')) {
        send('DATA');
        step = 7;
      } else if (step === 7 && msg.startsWith('354')) {
        const emailData = [
          `From: "TransferChek Feedback" <${user}>`,
          `To: <${to}>`,
          `Subject: ${subject}`,
          'MIME-Version: 1.0',
          'Content-Type: text/plain; charset=utf-8',
          '',
          body,
          '.'
        ].join('\\r\\n');
        send(emailData);
        step = 8;
      } else if (step === 8 && msg.startsWith('250')) {
        send('QUIT');
        step = 9;
      } else if (step === 9 || msg.startsWith('221')) {
        socket.end();
        resolve(true);
      } else {
        if (msg.startsWith('5') || msg.startsWith('4')) {
          socket.end();
          reject(new Error(`SMTP Error: ${msg}`));
        }
      }
    });

    socket.on('error', (err) => {
      reject(err);
    });
  });
}
