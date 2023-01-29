import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import { ABOUT_ROUTE, BASE_ROUTE, CONTACT_ROUTE, EXPERIENCE_ROUTE, HERO_ROUTE } from './helpers/router-routes';
import Contact from './components/sections/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: BASE_ROUTE,
    element: <App />,
    children: [
      {
        path: HERO_ROUTE,
        element: <Hero/>
      },
      {
        path: ABOUT_ROUTE,
        element: <About />,
      },
  
      {
        path: EXPERIENCE_ROUTE,
        element: <Experience />,
      },
      {
        path: CONTACT_ROUTE,
        element: <Contact/>,
      },
    ]
  }
])

root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
