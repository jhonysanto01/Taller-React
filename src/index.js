import React from 'react';
import ReactDOM from 'react-dom/client';
import bootstrap from "./css/bootstrap.css";
import style from "./css/style.css";
import responsive from "./css/responsive.css";
import reportWebVitals from './reportWebVitals';
import Encabezado from './Encabezado';
import Descripcion from './Descripcion';
import Seccionprofesores from './Seccionprofesores';
import Seccionvehiculos from './Seccionvehiculos';
import Seccionclientes from './Seccionclientes';
import Seccioncontacto from './Seccioncontacto';
import Seccionlugar from './Seccionlugar';
import Seccionadmision from './Seccionadmision';
import Seccionfooter from './Seccionfooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Encabezado />
    <Descripcion />
    <Seccionprofesores />
    <Seccionvehiculos />
    <Seccionclientes />
    <Seccioncontacto />
    <Seccionlugar />
    <Seccionadmision />
    <Seccionfooter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
