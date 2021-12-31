import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StoreProvider} from '../src/components/Store'

const root = document.getElementById('root')

root.style.backgroundColor = 'black'

ReactDOM.render(
  <React.StrictMode>
      <StoreProvider>
        <App />
      </StoreProvider>
  </React.StrictMode>,
  root
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
