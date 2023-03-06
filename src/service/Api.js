import axios from 'axios';

axios.defaults.baseURL = `https://api.spoonacular.com`;
const API_KEY = '773cd4d8f4194722be9afbc56327d906';
// const headers = { apiKey: API_KEY };


export const getAllRecipes = async page => {
  const response = await axios.get(
    `/recipes/complexSearch?apiKey=${API_KEY}&offset=${page}&number=12`
  );
  return response.data;
};

// export const getDate = async (date, base) => {
//   const response = await axios.get(`/${date}?apikey=${API_KEY}&base=${base}`);
//   return response.data;
// };