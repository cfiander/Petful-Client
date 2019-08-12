import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {AdoptionProvider} from './context/AdoptionContext'
import './index.css';
import App from './App/App'


ReactDOM.render(
    <BrowserRouter>
        <AdoptionProvider>
            <App />
        </AdoptionProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)
