import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import './index.scss'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import AlertSlice from './redux/AlertSlice';
import GitHubSlice from './redux/GitHubSlice';

import { Provider } from 'react-redux';


const rootReducer = combineReducers({
    AlertSlice: AlertSlice,
    GitHubSlice: GitHubSlice

  })
export const store = configureStore({
    reducer: rootReducer
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
