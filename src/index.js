import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


//store
//tempat dimana state global akan disimpan  (single source of truth)

//action 
//berbentuk object yaitu akan merepresentasikan sebuah actionn yang dilakukan pada aplikasi
//seperti ketika mengeclick button yang memiliki sebuah type, yang nanti dilakukan
//untuk merubah sebuah state

//reducer
//sebuah jembataan antara store dan action, akan memproses action yang diterima
//kemudian mengembalikan state yang baru

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
