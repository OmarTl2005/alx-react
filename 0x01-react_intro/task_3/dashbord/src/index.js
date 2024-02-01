import React from 'react';
import ReactDOM from 'react-dom/client';
import Notifications from './Notifications';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
