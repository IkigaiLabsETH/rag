

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

# Goal

💻 GPT Computer Assistant to brainstorm about web3 investments - NFA

pip3 install gpt-computer-assistant

** After first click to an option that include microphone or system audio you need to stop with another click to same option.

## Installation && Run

```console
pip3 install gpt-computer-assistant
```

```console
computerassistant
```



## Capabilities
At this time we have many infrastructure element. We just aim to provide whole thinks that already in ChatGPT app.

 - **Screen Read**
 - Microphone
 - **System Audio**
 - Memory

--
 - Open and close app
 - Open a url
 - **Clipboard**
 - Search Engines
 - **Python and SH Interpreters**
 - Writing and Running Scripts
 - Using your Telegram Account
 - Knowledge Management


#### Todo
- [x] Reset Option
- [x] Splitting long audios. (Whisper api just support <20mb)
- [x] Text input area
- [x] Just text mode (no voice answer)
- [x] Added different profiles
- [ ] More Effect

- [ ] Windows .exe
- [ ] Linux native
- [ ] MacOS native



# Challenges

Combining Python and TypeScript/Next.js in a single application introduces several challenges and potential downsides. Here are the most notable ones:

### 1. **Interfacing Between Languages:**
   - **API Management:** You need to manage the communication between the Python backend and the TypeScript/Next.js frontend through APIs. This requires careful API design, handling of HTTP requests, responses, and possible network issues.
   - **Serialization/Deserialization:** Data passed between the frontend and backend needs to be serialized into JSON (or another format) and then deserialized, which can introduce errors or inconsistencies if not handled properly.

### 2. **Deployment Complexity:**
   - **Multiple Environments:** You need to maintain and deploy two separate environments (Node.js for Next.js and Python for the backend). This can complicate deployment pipelines and increase the risk of errors.
   - **Containerization:** Using containers (like Docker) can help, but it adds an extra layer of complexity in terms of writing and maintaining Dockerfiles, managing images, and orchestrating containers.

### 3. **Performance Overhead:**
   - **Latency:** There is an inherent latency in making HTTP requests from the frontend to the backend, which can affect the performance and responsiveness of your application.
   - **Scalability Issues:** The performance and scalability of your application can be affected by the need to scale both the Python and Node.js servers independently.

### 4. **Consistency and Synchronization:**
   - **Data Consistency:** Ensuring data consistency between the frontend and backend can be challenging, especially when dealing with complex data models or real-time updates.
   - **State Management:** Managing state across a frontend-backend split can be more challenging than in a single, monolithic application.

### 5. **Development Workflow:**
   - **Tooling Differences:** Python and TypeScript have different development tools, package managers, and workflows. Developers need to be proficient in both ecosystems, which can increase the learning curve.
   - **Debugging and Testing:** Debugging and testing can be more complex, as you need to set up and manage testing environments for both the Python backend and the TypeScript frontend.

### 6. **Security Concerns:**
   - **Authentication and Authorization:** Implementing secure authentication and authorization across a split frontend-backend architecture can be more complex. You need to ensure secure handling of tokens, sessions, and other sensitive data.
   - **API Security:** Protecting your APIs from threats such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF) requires additional security measures.

### 7. **Dependency Management:**
   - **Dependencies:** Managing dependencies for two different environments can be cumbersome. Each language has its own package manager (npm for Node.js and pip for Python), and dependencies need to be tracked separately.
   - **Versioning:** Keeping track of compatible versions of dependencies between Python and TypeScript can be challenging, especially when there are updates or breaking changes.

### Mitigating the Challenges:

1. **API Design:** Invest time in designing a robust API with clear documentation to facilitate smooth communication between frontend and backend.
2. **Containerization:** Use Docker to containerize both the Python backend and the Next.js frontend, simplifying deployment and environment management.
3. **Consistent Tooling:** Standardize your development and deployment workflows as much as possible, using tools like Docker Compose for orchestration and CI/CD pipelines for automation.
4. **Security Best Practices:** Follow best practices for securing your API and managing authentication/authorization.
5. **Monitoring and Logging:** Implement comprehensive monitoring and logging to quickly identify and resolve issues across both environments.


