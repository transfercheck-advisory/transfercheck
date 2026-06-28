import os
import re
import json

def load_env():
    env_vars = {}
    if os.path.exists('.env'):
        with open('.env', 'r', encoding='utf-8') as f:
            for line in f:
                parts = line.strip().split('=')
                if len(parts) >= 2:
                    key = parts[0].strip()
                    val = '='.join(parts[1:]).strip()
                    env_vars[key] = val
                    os.environ[key] = val
    return env_vars

def parse_transfer_stats():
    # Parse transfer-stats.js to extract school details
    stats_path = 'transfer-stats.js'
    if not os.path.exists(stats_path):
        return {}
    
    try:
        with open(stats_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple extraction using regex or basic parsing since it is a JS object
        # window.transferStats = { ... }
        # Let's extract block within window.transferStats = { ... };
        match = re.search(r'window\.transferStats\s*=\s*(\{.*?\});', content, re.DOTALL)
        if not match:
            match = re.search(r'transferStats\s*=\s*(\{.*?\});', content, re.DOTALL)
            
        if match:
            js_obj_str = match.group(1)
            # Find schools
            schools = {}
            # Match each school entry (keys and their object contents)
            school_blocks = re.findall(r'"([^"]+)"\s*:\s*\{([^}]+)\}', js_obj_str)
            for school_id, block in school_blocks:
                school_data = {}
                # Extract key values
                # Match "key": "value" or "key": number
                matches = re.findall(r'"([^"]+)"\s*:\s*(?:"([^"]+)"|([0-9\-\.\+a-zA-Z\s]+))', block)
                for m in matches:
                    k = m[0]
                    v = m[1] if m[1] else m[2].strip()
                    school_data[k] = v
                schools[school_id] = school_data
            return schools
    except Exception as e:
        print(f"Error parsing transfer-stats.js: {e}")
    return {}

def format_school_name(school_id):
    parts = school_id.split('-')[:-1] # remove hash
    if not parts:
        parts = [school_id]
    name = " ".join([w.capitalize() if w not in ['of', 'at', 'the'] else w for w in parts])
    if school_id.startswith('uiuc-'):
        name = "UIUC"
    elif school_id.startswith('texas-a-m-'):
        name = "Texas A&M"
    return name

def generate_fallback_contents(schools):
    # If no OpenAI API key, generate a highly detailed 30-day template based on transfer-stats.js
    school_list = list(schools.keys())
    if not school_list:
        school_list = ["georgia-tech-776cb90e", "ucla", "uc-berkeley-362f972e", "university-of-washington-2fde0bf4"]
        schools = {
            "georgia-tech-776cb90e": {"avgGpa": "3.80-4.00", "usNewsRank": "33"},
            "ucla": {"avgGpa": "3.85-4.00", "usNewsRank": "15"},
            "uc-berkeley-362f972e": {"avgGpa": "3.89-4.00", "usNewsRank": "15"},
            "university-of-washington-2fde0bf4": {"avgGpa": "3.50-3.80", "usNewsRank": "40"}
        }

    output = "# 🎓 TransferCheck 30일 완성 바이럴 마케팅 원고 마스터북\n\n"
    output += "이 원고북은 OpenAI API 키가 지정되지 않아, 로컬 데이터베이스에 기반해 자동으로 생성된 고유 마케팅 스케줄입니다. 매일 다음 원고를 소셜 미디어 플랫폼에 게시하십시오.\n\n"
    output += "---\n\n"

    themes = [
        "선수과목 누락으로 인한 1년 편입 지연 예방 전략",
        "유학원 없이 0원으로 UCLA/UC Berkeley 합격 로드맵 짜기",
        "명문 공대 편입 필수 수학 및 과학 GPA 관리법",
        "AP 과목 대학 학점 인정 커트라인 및 전략적 재수강 가이드",
        "입학사정관의 눈을 사로잡는 편입 에세이 작성 핵심 공식 3가지",
        "편입 시 최대 학점 인정 제한(Credit Cap) 대처법"
    ]

    for day in range(1, 31):
        school_id = school_list[(day - 1) % len(school_list)]
        school_name = format_school_name(school_id)
        school_data = schools.get(school_id, {"avgGpa": "3.7+", "usNewsRank": "N/A"})
        theme = themes[(day - 1) % len(themes)]
        
        output += f"## 📅 [Day {day}] {school_name} 편입 공략 - {theme}\n\n"
        output += f"* **오늘의 타겟 대학**: {school_name} (US News 순위: #{school_data.get('usNewsRank', 'N/A')})\n"
        output += f"* **합격자 평균 GPA**: {school_data.get('avgGpa', 'N/A')}\n"
        output += f"* **주요 안내사항**: {school_data.get('advisingNote', '전공 필수 Prerequisite 사전 이수 필요.')}\n\n"
        
        # 1. Twitter (X)
        output += "### 🐦 Twitter (X) 바이럴 스레드 원고\n\n"
        output += f"1/ \"[{school_name} 편입을 위한 {day}일차 꿀팁] {theme}에 대해 알고 계신가요? GPA가 아무리 높아도 이것 하나 놓치면 즉시 탈락(Auto-Reject)될 수 있습니다. 조목조목 타래로 정리해 드립니다 👇\"\n\n"
        output += f"2/ \"{school_name}의 평균 합격 GPA는 {school_data.get('avgGpa', '3.7+')} 수준으로 매우 높습니다. 하지만 더 중요한 것은 필수 과목 매핑입니다. 전공 요건을 정확히 충족했는지 체크해야 합니다.\"\n\n"
        output += f"3/ \"많은 학생들이 복잡한 요강을 읽다 실수를 합니다. 실수가 생기면 복구에만 수천만 원의 예산과 1년의 시간이 낭비됩니다.\"\n\n"
        output += f"4/ \"이를 3초 만에 자가 진단해 주는 툴이 바로 **TransferCheck**입니다. 내 학점과 매핑 상태를 직접 확인해 보세요!\n"
        output += f"👉 https://transfercheck.vercel.app/schools/{school_id}\"\n\n"
        
        # 2. Instagram
        output += "### 📸 Instagram 카드뉴스 가이드\n\n"
        output += f"* **슬라이드 1 (표지)**: \"{school_name} 편입 합격생들이 숨겨온 {theme} 비밀 🤫\"\n"
        output += f"* **슬라이드 2 (현실)**: \"{school_name} 평균 GPA {school_data.get('avgGpa', '3.7+')} 이상이어도 선수과목 비면 얄짤없이 탈락!\"\n"
        output += f"* **슬라이드 3 (해결책)**: \"학교 요강 뒤지지 말고, TransferCheck에서 내 이수 과목과 바로 매칭해 보세요.\"\n"
        output += f"* **슬라이드 4 (CTA)**: \"지금 프로필 링크를 클릭하고 {school_name} 자가 진단을 시작하세요!\"\n\n"
        
        # 3. YouTube Shorts
        output += "### 🎥 YouTube Shorts 60초 나레이션 대본\n\n"
        output += f"* **[0-5초] 후크**: \"학점 4.0도 광탈시키는 {school_name} 편입의 무서운 비밀!\"\n"
        output += f"* **[5-30초] 본론**: \"{school_name} 편입을 준비할 때 가장 많이 하는 실수가 바로 {theme}입니다. 선수과목을 제대로 배치하지 않으면 아예 원서 검토도 안 합니다. 학비 수천만 원을 날리는 지름길이죠.\"\n"
        output += f"* **[30-60초] 결론 & CTA**: \"이런 리스크를 막으려면 스마트한 편입 전략 엔진 **TransferCheck**로 지금 바로 내 과목들을 자가 진단해 보세요. 고정 댓글 확인!\"\n\n"
        output += "---\n\n"
        
    return output

def main():
    print("Starting 30-Day Marketing Content Generator...")
    env = load_env()
    openai_key = env.get('OPENAI_API_KEY') or os.environ.get('OPENAI_API_KEY')
    
    schools = parse_transfer_stats()
    print(f"Loaded {len(schools)} schools from transfer-stats.js")
    
    if not openai_key:
        print("OPENAI_API_KEY not found in environment. Generating high-quality fallback contents...")
        output_content = generate_fallback_contents(schools)
    else:
        print("OPENAI_API_KEY found! Generating via OpenAI GPT API...")
        try:
            from openai import OpenAI
            client = OpenAI(api_key=openai_key)
            
            output_content = "# 🎓 TransferCheck 30일 완성 바이럴 마케팅 원고 마스터북 (AI Generated)\n\n"
            output_content += "이 원고북은 OpenAI GPT API를 사용해 실제 조지아텍, UCLA 등 63개 대학의 편입 요건 데이터를 기반으로 맞춤 생성되었습니다.\n\n"
            output_content += "---\n\n"
            
            school_items = list(schools.items())
            
            for chunk in range(3):
                start_day = chunk * 10 + 1
                end_day = (chunk + 1) * 10
                print(f"Generating Days {start_day} to {end_day}...")
                
                # Build context from 10 schools
                chunk_schools = school_items[(start_day-1)%len(school_items) : (end_day-1)%len(school_items) + 1]
                context_str = ""
                for sid, sdata in chunk_schools:
                    context_str += f"SchoolID: {sid}, Name: {format_school_name(sid)}, Rank: #{sdata.get('usNewsRank','N/A')}, GPA: {sdata.get('avgGpa','N/A')}, Advising: {sdata.get('advisingNote','')}\n"
                
                prompt = f"""
You are a top-tier viral marketer. Generate daily social media marketing copy for a college transfer advisory engine called 'TransferCheck' (website: https://transfercheck.vercel.app/).
Generate for Days {start_day} to {end_day} (10 days total) in Korean.

Each day must contain:
1. Day Title & Target School Details (using the data provided)
2. Twitter (X) viral thread (4-5 sub-tweets) with links like https://transfercheck.vercel.app/schools/[SchoolID]
3. Instagram card news slide-by-slide guide (4 slides)
4. YouTube Shorts narration script (60 seconds) with visual cues.

Use this school data:
{context_str}

Ensure the tone is highly professional, urgent, and addresses transfer students' fears of missing prerequisites and wasting tuition.
Output in clean markdown format. Do not use generic placeholders.
"""
                response = client.chat.completions.create(
                    model="gpt-4o",
                    messages=[{"role": "user", "content": prompt}],
                    temperature=0.7
                )
                output_content += response.choices[0].message.content + "\n\n---\n\n"
                
        except Exception as e:
            print(f"Failed to generate via OpenAI: {e}. Falling back to default generation...")
            output_content = generate_fallback_contents(schools)
            
    # Save output
    output_filename = 'marketing_output_30days.md'
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(output_content)
    print(f"Successfully generated 30 days of marketing material in '{output_filename}'!")

if __name__ == '__main__':
    main()
