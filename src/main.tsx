import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/routes/App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import { Login } from '@/routes/Login.tsx';
import { Index as Level1 } from '@/routes/level1/Index.tsx';
import { Index as Level2 } from '@/routes/level2/Index.tsx';
import { Index as Level3 } from '@/routes/level3/Index.tsx';
import Game from './routes/Game.tsx';
import { Characters } from '@/routes/Characters.tsx';
import Menu from '@/routes/Menu.tsx';
import { Synopsis } from './routes/Synopsis.tsx';
import { Members } from './routes/Members.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "synopsis",
        element: <Synopsis />,
      },
      {
        path: "members",
        element: <Members />,
      },
    ]
  },
  {
    path: "/game",
    element: <Game />,
    children: [
      {
        path: "",
        element: <Menu />,
      },
      {
        path: "level1",
        element: <Level1 />,
      },
      {
        path: "level2",
        element: <Level2 />,
      },
      {
        path: "level3",
        element: <Level3 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
