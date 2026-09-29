import google.generativeai as genai
import os
import time

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-3.5-flash-lite")

def run_gemini(prompt: str) -> str:
    for attempt in range(3):
        try:
            response = model.generate_content(prompt)
            return response.text

        except Exception as e:
            print(f"Gemini attempt {attempt + 1} failed:", e)

            if attempt < 2:
                time.sleep(2)
            else:
                raise e