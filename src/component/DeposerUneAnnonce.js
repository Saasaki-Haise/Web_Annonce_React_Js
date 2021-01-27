// Import Dependence
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const DeposerUneAnnonce = () => {
    return(
        <div>
            <h1 className='align'>Déposer Une Annonce</h1>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description :</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <div className="mb-3">
                <label for="formFileSm" className="form-label">Image</label>
                <input className="form-control form-control-sm" id="formFileSm" type="file"/>
            </div>
        </div>
    )
}

export default DeposerUneAnnonce;