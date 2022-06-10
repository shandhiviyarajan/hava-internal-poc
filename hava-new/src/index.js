import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import defaultDesign from './core/environments/default';


const root = ReactDOM.createRoot(document.getElementById('hava-new-react'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

