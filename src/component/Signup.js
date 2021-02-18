import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../component/Firebase';

const Signup = (props) => {
    const data = {
        name:'',
        email: '',
        password: '',
        confirmPassword: ''
    };
    // Variable d'état
    const [ loginData, setLoginData ] = useState(data);
    const [ error, setError ] = useState('');
    const firebase = useContext(FirebaseContext);
    // Met a jour les input
    const handleChange = e => {
            setLoginData({...loginData, [e.target.id] : e.target.value});}
    // Envoi du formulaire
    const handleSubmit = e => {
            e.preventDefault();
            const { email, password,name } = loginData;
            firebase.signupUser(email, password)
            .then(authUser => { 
                return firebase.user(authUser.user.uid).set({
                    name,
                    email
                })
             })
            .then( () => {
                setLoginData({...data});
                props.history.push('/Login');
            })
            .catch(error => {
                setError(error);
                setLoginData({...data});
            })
    }
    // Destructuring
    const {email, password, confirmPassword} = loginData;
    // Condition Formulaire
    const btn = email === '' || password === '' || password !== confirmPassword 
    ? <button disabled>Inscription</button> : <button>Inscription</button>
    // Gestion des erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return(
                    <div className="loginBox">
                    <h1 className='align'>Inscription</h1>
                            {errorMsg}
                        <form onSubmit={handleSubmit}>

                        <div className='inputBox'>
                                <label htmlFor='name'>Name</label>
                                <input type="text" onChange={handleChange} className="form-control" id="name" required />
                            </div>
                            
                            <div className='inputBox'>
                                <label htmlFor='Email'>Email</label>
                                <input type="email" onChange={handleChange} value={email} className="form-control" id="email" required />
                            </div>

                            <div className='inputBox'>
                                <label htmlFor='Password'>Mot de passe</label>
                                <input type="password" onChange={handleChange} value={password} className="form-control" id="password" required />
                            </div>

                            <div className='inputBox'>
                                <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
                                <input type="password" onChange={handleChange} value={confirmPassword} className="form-control" id="confirmPassword" required/>
                            </div>
                            {btn}
                            </form>
                            <Link to='/Login'>Déja inscrit ? Cliquez ici pour vous connectez !</Link>
                    </div>
    
    )
}

export default Signup;