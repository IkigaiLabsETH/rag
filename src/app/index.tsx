// pages/index.tsx
import { useState } from 'react';
import { getInvestmentAdvice } from './stocks.js';

const Home = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState('');

  const handleFetchAdvice = async () => {
    const result = await getInvestmentAdvice(query);
    setAdvice(result.result);
  };

  return (
    <div>
      <h1>RAG AI Investment Advice</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter your query" 
      />
      <button onClick={handleFetchAdvice}>Get Advice</button>
      <div>
        <h2>Advice:</h2>
        <p>{advice}</p>
      </div>
    </div>
  );
};

export default Home;