// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCRPRSFzngwTC3_QfFDnGsR6-dgfSdUGCk',
//   authDomain: 'yammy-meal.firebaseapp.com',
//   databaseURL:
//     'https://yammy-meal-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'yammy-meal',
//   storageBucket: 'yammy-meal.appspot.com',
//   messagingSenderId: '864188259461',
//   appId: '1:864188259461:web:4772d10cf629e23f69ddec',
// };

// firebase.initializeApp(firebaseConfig);

// export const db = firebase.database();

import axios from 'axios';

axios.defaults.baseURL = `https://yammy-meal-default-rtdb.europe-west1.firebasedatabase.app`;

export const addUser = async user => {
  const response = await axios.post(
    `/users.json`, user
  );
  return response.data;
};

export const logInUser = async()=> {
  const response = await axios.get(`/users.json`);
  return response.data;
};