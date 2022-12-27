import React,{Component} from 'react';
import './css/Header.css';
import logo from './pics/logo.png';

class Header extends Component{

    constructor(props) {
        super(props)
    }


    render(){
        return(
            <div className="Header">
                <div className="GalleryHeaderContainer">
                    <p style={{cursor: 'pointer'}}>contact</p>
                    <p style={{cursor: 'pointer'}} onClick={this.props.galleryClick}>gallery</p>
                </div>
                <div className="logo">
                    <img className="img-logo" src={logo}></img>
                </div>
                <div className="LocationHeaderContainer">
                    <p style={{cursor: 'pointer'}} onClick={this.props.locationClick}>location</p>
                    <p style={{cursor: 'pointer'}} onClick={this.props.aboutUsClick}>about us</p>
                </div>
            </div>
        )
    }
}

export default Header;