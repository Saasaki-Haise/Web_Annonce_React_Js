import React from 'react';
import img from '../image/dog_1.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Annonce = (props) => {
    return(
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Nom: { props.children } </p>
          <p className="card-text">Race: </p>
          <p className="card-text">Age: </p>
        </div>
        </div>
    
    )
}


export default Annonce;