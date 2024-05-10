import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import Homepage from './components/Homepage'
import Welcome from './components/Welcome'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/Homepage",
    element: <Homepage/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
