import React from 'react';

import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Acceuil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/DeposerUneAnnonce">Déposer une Annonce</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Favoris">Favoris</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Messages">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Profil">Se connecter</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;