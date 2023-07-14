import axios from 'axios';

axios.defaults.baseURL = `https://yammy-meal-default-rtdb.europe-west1.firebasedatabase.app`;
const API_KEY = "AIzaSyCRPRSFzngwTC3_QfFDnGsR6-dgfSdUGCk";
export const addUser = async user => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`, {...user, returnSecureToken:true}
  );
  return response.data;
};

export const logInUser = async()=> {
  const response = await axios.get(`/users.json`);
  return response.data;
};