import React from 'react';
import { Link } from 'react-router-dom';
import img from '../image/dog.jpg'


const Logo = () => {
    return(
        <div>
           <Link to='/'> <img className='logo' src={img}></img></Link>
        </div>
    )
}

export default Logo;