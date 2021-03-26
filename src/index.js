import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import './index.css';
// import dummyData from './dummy-store';

// ReactDOM.render(<App data = {dummyData}/>, document.getElementById('root'));

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
);
