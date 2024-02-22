import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Emprestimos from './pages/Emprestimos';
import Perfil from './pages/Perfil';
import Dividas from './pages/Dividas';
import Devedores from './pages/Devedores';
import EsqueceuSenha from './pages/EsqueceuSenha';
import Home from './pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/devedores",
    element: <Devedores/>,
  },
  {
    path: "/dividas",
    element: <Dividas/>,
  },
  {
    path: "/emprestimos",
    element: <Emprestimos/>,
  },
  {
    path: "/esqueci",
    element: <EsqueceuSenha/>,
  },
  {
    path: "/perfil",
    element: <Perfil/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
