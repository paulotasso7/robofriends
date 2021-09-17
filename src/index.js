import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'

ReactDOM.render(

                <React.StrictMode>

                  <App robots={robots}/>
                  
                </React.StrictMode>,

  document.getElementById('root'));
reportWebVitals();
