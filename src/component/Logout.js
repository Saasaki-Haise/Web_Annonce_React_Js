import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext}from './Firebase';

const Logout = () => {
    const firebase = useContext(FirebaseContext);
    // Variables d'états
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            console.log('Déconnexion !!');
            firebase.signoutUser()
        }
    }, [checked, firebase])

    const handleChange = e => {
        setChecked(e.target.checked);
    }

    return (
        <div className='logoutContainer'>
            <label className='switch'>
                <input
                    onChange={handleChange}
                    type='checkbox'
                    checked={checked}
                />
                <span className='slider round'></span>
            </label>
            
        </div>
    )
}

export default Logout;
