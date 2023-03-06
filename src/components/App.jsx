import Register from 'pages/Register/Register';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { HeaderComp } from './HeaderComp/HeaderComp';
// import { FormBlock } from './FormBlock/FormBlock';
// import { Main } from './App.styled';

// FIREBASE________________________________________
// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase';
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

// export const firebaseApp = initializeApp(firebaseConfig);
// const db = firebase.database();
// end-FEREBASE____________________________________

const Home = lazy(() => import('pages/Home/Home'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const MoviesDetails = lazy(() => import('pages/MovieDetails/MoviesDetails'));
// const Error404 = lazy(() => import('pages/Error404'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviewes = lazy(() => import('./Reviewes/Reviewes'));

export const App = () => {
   
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviewes" element={<Reviewes />} />
        </Route>
        <Route path="*" element={<Error404 />} /> */}
      </Route>
    </Routes>
  );
};


