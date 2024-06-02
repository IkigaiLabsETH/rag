

# GM

pip install -r requirements.txt

streamlit run investment_agent.py

# How it Works?

Upon running the app, you will be prompted to enter your OpenAI API key. This key is used to authenticate and access the OpenAI language model.
Once you provide a valid API key, an instance of the Assistant class is created. This assistant utilizes the GPT-4 language model from OpenAI and the YFinanceTools for accessing stock data.
Enter the stock symbols of the two companies you want to compare in the provided text input fields.
The assistant will perform the following steps:
Retrieve real-time stock prices and historical data using YFinanceTools
Fetch the latest company news and analyst recommendations
Gather comprehensive company information
Generate a detailed comparison report using the GPT-4 language model
The generated report will be displayed in the app, providing you with valuable insights and analysis to guide your investment decisions.


uvicorn main:app --reload


# Summary:

	1.	Set up a FastAPI server in Python to expose your RAG AI agent.
	2.	Create and run the FastAPI server to listen for requests.
	3.	Create a Next.js TypeScript project and install axios for HTTP requests.
	4.	Create a service in Next.js to interact with the Python API.
	5.	Use the service in a Next.js component to fetch and display the RAG AI agent’s responses.

