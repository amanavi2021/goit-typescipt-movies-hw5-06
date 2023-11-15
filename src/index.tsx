import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
    <BrowserRouter basename='/goit-typescipt-movies-hw5-06'>
    <App />
    </BrowserRouter>
   </React.StrictMode>
);

