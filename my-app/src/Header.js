import { Component } from 'react';
import './css/Header.css';
import logo from './pics/logo.png';
class Header extends Component{

    render(){
        return(
            <div className="Header">
                <div className="logo">
                    <img className="img-logo" src={logo}></img>
                </div>
            </div>
        )
    }
}

export default Header;