// Import Dependence
import React, { useState } from 'react';
// Import Component
import Logout from './Logout';


const Profil = () => {
    const [userSession, setUserSession] = uUeState(null);

    return(
            <div>
                <h1 className='align'>Profil</h1>
                <Logout />
            </div>
    )
}

export default Profil;


