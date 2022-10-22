import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PostDetailed from './components/PostDetailed';

import { Provider } from 'react-redux';
import store from './store/store';
import DataProvider from './DataProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DataProvider />
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/post/:id' element={<PostDetailed />} />
      </Routes>
    </Router>
  </Provider>
);
