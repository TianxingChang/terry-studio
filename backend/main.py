from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Load the API key from the environment variable
api_key = os.getenv("DEEPSEEK_API_KEY")

# 在文件顶部定义一个字典来存储用户对话记录
user_conversations = {}

# Define a Pydantic model for the request body
class QueryRequest(BaseModel):
    query: str
    user_id: str

# Please install OpenAI SDK first: `pip3 install openai`
# 初始化 deepseek client
from openai import OpenAI
client = OpenAI(api_key=api_key, base_url="https://api.deepseek.com")

# 测试 deepseek 是否正常工作
@app.get("/test_deepseek")
async def root():
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "You are a helpful assistant"},
            {"role": "user", "content": "Hello"},
        ],
        stream=True
    )
    return {"message": response.choices[0].message.content}

# 处理用户对话
@app.post("/chat")
async def chat(request: QueryRequest):
    user_id = request.user_id  # 假设请求中包含用户ID
    user_query = request.query

    # 如果用户没有对话记录，初始化
    if user_id not in user_conversations:
        user_conversations[user_id] = []

    # 将用户查询添加到对话记录中
    user_conversations[user_id].append({"role": "user", "content": user_query})

    # 生成响应
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=user_conversations[user_id],
        stream=True
    )

    # 处理响应并更新对话记录
    async def generate():
        async for chunk in response:
            if chunk.choices[0].delta.content is not None:
                yield chunk.choices[0].delta.content
                # 将AI的响应添加到对话记录中
                user_conversations[user_id].append({"role": "assistant", "content": chunk.choices[0].delta.content})

    # Return a StreamingResponse
    from fastapi.responses import StreamingResponse
    return StreamingResponse(generate(), media_type="text/plain")


# Define a function to call the DeepSeek API
def call_deepseek_api(parsed_query: str):
    # Replace with the actual DeepSeek API endpoint and parameters
    deepseek_api_url = "https://api.deepseek.com/endpoint"
    response = requests.post(deepseek_api_url, json={"query": parsed_query})
    
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Error calling DeepSeek API")
    
    return response.json()

# Define the FastAPI endpoint
@app.post("/query")
async def handle_query(request: QueryRequest):
    # Parse the user's query using RAG
    parsed_query = request.query  # This is a placeholder for actual RAG processing
    
    # Call the DeepSeek API with the parsed query
    deepseek_response = call_deepseek_api(parsed_query)
    
    # Return the response from the DeepSeek API
    return {"response": deepseek_response}

@app.get("/")
async def root():
    return {"message": "Hello World"}