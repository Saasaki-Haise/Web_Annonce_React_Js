// Import Dependence
import React, { useState, useContext, useEffect, Fragment } from 'react';
import { FirebaseContext } from './Firebase';
// Import Component
import Logout from './Logout';
import Welcome from './Welcome';



const Profil = props => {
    
    // Contexte Firebase
    const firebase = useContext(FirebaseContext);
    // Variables D'états
    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});
    
    
    
    useEffect(() => {

        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/Login');
        })

        if (userSession !== null) {
            firebase.user(userSession.uid)
                .get()
                .then(doc => {
                    if  (doc && doc.exists) {
                        const data = doc.data()
                        setUserData(data)
                        
                        
                        
                        
                    }
                })
                .catch(error => console.log(error))
        }
        

        return () => {
            listener();
        }
    }, [userSession])

    return userSession === null ? (
        <Fragment>
        <div className='loader'></div>
        <p className='align'>Patientez ... </p>
        </Fragment>
    ) :  (
         
        <Fragment>
            <h1 className='align'>Profil</h1>
            <Logout />
            <Welcome userData={userData} userSession={userSession} />
        </Fragment>
    )
    
}

export default Profil;

