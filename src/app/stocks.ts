// services/investmentService.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000/investment';

export const getInvestmentAdvice = async (query: string) => {
  const response = await axios.post(API_URL, { query });
  return response.data;
};