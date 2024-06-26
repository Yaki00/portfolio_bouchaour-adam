import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './assets/navbar/Navbar.jsx';
import Page1 from './assets/page1/Page1.jsx';
import Apropos from './assets/Apropos/Apropos.jsx';
import Accueil from './assets/accueil/Accueil.jsx';
import Veille from './assets/Veilles/Veille.jsx';  
import Document from './assets/documents/Document.jsx';

import React from 'react';
import Ecole from './assets/Apropos/Ecole/Ecole';

function App() {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <Sidebar/>
      </div>
      <div className="col-md-10">
      <Page1/>
      <Apropos/>
      <Ecole />
      <Veille/>
      <Document/>
      </div>
    </div>
  </div>
  );
}

export default App;
