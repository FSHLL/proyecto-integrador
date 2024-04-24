import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './routes/App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import { Login } from './routes/Login.tsx';
import { Index as Level1 } from './routes/level1/Index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "",
        element: <Level1 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
