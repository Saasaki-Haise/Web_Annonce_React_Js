import React from 'react';
import SeachSection from './SeachSection';
import Annonces from './Annonces';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Acceuil() {
    return (
        <div className='container'>
            <SeachSection/>
        <h1>Annonces</h1>
        <Annonces>Titi</Annonces>
        <Annonces>Rex</Annonces>
        <Annonces>Toto</Annonces>
        <Annonces>Oto</Annonces>
        <Annonces>Riki</Annonces>
        <Annonces>Zozo</Annonces>
        <Annonces>Juju</Annonces>
        </div>
    )
}

export default Acceuil
