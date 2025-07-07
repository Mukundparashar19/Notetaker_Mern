import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './modules/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Allnotes from './modules/Allnotes';
import Viewnotes from './modules/Viewnotes';
import Edit from './modules/Edit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={ <Welcome/>} />   
       <Route path="/allnotes" element={ <Allnotes/>} />   
       <Route path="allnotes/viewnotes/:id" element={ <Viewnotes/>}/>   
       <Route path="allnotes/editnote/:id" element={ <Edit/>} />   
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

