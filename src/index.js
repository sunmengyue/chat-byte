import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

function fancyLog() {
  console.log('%c Render with 🤯 👉', 'background: purple; color: #FFF');
  console.log(store.getState());
}

const render = () => {
  fancyLog();
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

render();

store.subscribe(render);
