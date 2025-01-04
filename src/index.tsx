import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.min.js'

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <App />

);
