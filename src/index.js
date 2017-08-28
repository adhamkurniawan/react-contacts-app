import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactsApp from './ContactsApp';
import registerServiceWorker from './registerServiceWorker';

let contacts = [
  { name: "Adham Kurniawan", email: "adhamkur@gmail.com" },
  { name: "Ivan Setiawan", email: "ivansrp@gmail.com" },
  { name: "Ananda Rizki P", email: "anandarp@gmail.com" },
  { name: "Ryan Radityama", email: "ryanr@gmail.com" },
];


ReactDOM.render(<ContactsApp contacts={contacts} />, document.getElementById('root'));
registerServiceWorker();
