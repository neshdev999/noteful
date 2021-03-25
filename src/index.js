import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import dummyData from './dummy-store';

ReactDOM.render(<App data = {dummyData}/>, document.getElementById('root'));
