import React from 'react';
import { render } from 'react-dom';
import { App } from './Containers/App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
render( 
  <Router>
    <App/>
  </Router>,
  rootElement
);

