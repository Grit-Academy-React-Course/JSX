import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className="header">
      <img src="https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png" alt='Grid-Academy' />
    </header>
    {/* 
    Our component App is now between header and footer. 
    Whatever data/html code we put in the App component, it will be rendered between the header and the footer.
   */}
    <App/>

    <footer className="footer">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">Linkedin</a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</a>
      <a href="https://google.com" target="_blank" rel="noreferrer">Google</a>
    </footer>
  </React.StrictMode>
);