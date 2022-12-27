import { Component, useRef, React } from 'react';
import './css/Header.css';
import logo from './pics/logo.png';

class Header extends Component{

    constructor(props) {
        super(props)
        this.GalleryRef = React.createRef()  
    }

    GalleryScroll = () => {
       this.GalleryRef.current.scrollIntoView();
    };

    render(){
        return(
            <div className="Header">
                <div className="GalleryHeaderContainer">
                    <p>contact</p>
                    <p ref={this.GalleryRef} onClick={this.GalleryScroll}>gallery</p>
                </div>
                <div className="logo">
                    <img className="img-logo" src={logo}></img>
                </div>
                <div className="LocationHeaderContainer">
                    <p>location</p>
                    <p>about us</p>
                </div>
            </div>
        )
    }
}

export default Header;