import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const SeachSection = () => {
    return (
        
            <div className="card">
                <div className="card-body">
                    <h1>Recherche</h1>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            
       
    )
}

export default SeachSection;