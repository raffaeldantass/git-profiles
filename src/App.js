import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './views/Shell';
import store from '../store/store';

const root = document.getElementById('root');
const render = () => {
  ReactDOM.render( <Shell data = { store.getState() } />, root )
}

render();

store.subscribe(render);

