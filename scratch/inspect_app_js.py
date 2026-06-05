import os

app_js_path = r'C:\Users\user\OneDrive\바탕 화면\transfer app\app.js'
if os.path.exists(app_js_path):
    with open(app_js_path, 'r', encoding='utf-8') as f:
        for idx, line in enumerate(f, 1):
            if any(k in line for k in ['requirementSearch', 'activateProductTab', 'requirementSelect', 'requirementMenu']):
                print(f"{idx}: {line.strip()}")
else:
    print("File not found")
