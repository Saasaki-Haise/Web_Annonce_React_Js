import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../component/Firebase';

const Login = (props) => {
    // Contexte Firebase
    const firebase = useContext(FirebaseContext);
    // Variables d'états
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '' ) {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
     }, [password, email, btn])

     const handleSubmit = e => {
         e.preventDefault();
        firebase.loginUser(email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            props.history.push('/Profil');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
     }

  
    return(
        <div className="loginBox">
                    <h1 className='align'>Connexion</h1>
                            
                        { error !== '' && <span>{error.message}</span> }

                        <form onSubmit={handleSubmit}>
                            
                            <div className='inputBox'>
                                <label htmlFor='Email'>Email</label>
                                <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" required />
                            </div>

                            <div className='inputBox'>
                                <label htmlFor='Password'>Mot de passe</label>
                                <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control" required />
                            </div>
                            { btn ? <button>Connexion</button> : <button disabled>Connexion</button> }

                            </form>
                            <Link to='/Signup'>Nouveau ?? Inscrivez - vous maintenant !</Link>
                    </div>
    )
}

export default Login;