# main.py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class InvestmentRequest(BaseModel):
    query: str

@app.post("/investment")
def get_investment_response(request: InvestmentRequest):
    # Your RAG logic here
    response = {"result": "investment advice based on RAG"}
    return response

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)