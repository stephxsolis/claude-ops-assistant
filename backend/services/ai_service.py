import os
from anthropic import Anthropic
from dotenv import load_dotenv

load_dotenv()

client = Anthropic(
    api_key = os.getenv("ANTHROPIC_API_KEY")
)


def analyze_ticket(title, details):
    prompt = f"""
You are an AI operations assistant helping an organization triage requests.
Analyze the following request.

Title:
{title}

Details:
{details}

Return:
    
Category:
Priority:
Summary:
Recommended Steps:

Keep the response concise and practical.
"""
    response = client.messages.create(
        model = "claude-haiku-4-5-20251001",
        max_tokens = 500,
        messages = [
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
    
    ai_response = response.content[0].text

    return {
        "analysis": ai_response
    }
