import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css';
import App from './App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

function Root() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StorePicker />} />
        <Route path="/store/:storeID" element={<App />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);
