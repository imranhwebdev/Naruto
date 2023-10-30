import { React } from 'react'
import logo from '../assets/img/naruto-site-logo.svg';

export default function Header(){
    return(
        <header className="heading">
            <div className='container'>
                <div className="header__logo">
                    <a href="/" className='site__logo'>
                        <img src={logo} alt="" /> 
                    </a>  
                </div>
            </div>
        </header>
    );

}