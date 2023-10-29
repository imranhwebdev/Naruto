import { React } from 'react'
import logo from '../assets/img/naruto-site-logo.svg';

export default function Header(){
    return(
        <header className="heading">
            <div className='container'>
                <a href="/" className='site__logo'>
                    <img src={logo} alt="" /> 
                </a>  
            </div>
        </header>
    );

}