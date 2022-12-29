import React,{Component} from 'react';
import './css/Header.css';
import logo from './pics/logo.png';

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            menuBar : false
        }
    }

    menuBarToggle = () => {
        this.setState(prevSate => ({
            menuBar : !prevSate.menuBar
        }))
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
                <div className="container" onClick={this.menuBarToggle}>
                    <div className={this.state.menuBar ? "change bar1":"bar1"}></div>
                    <div className={this.state.menuBar ? "change bar2":"bar2"}></div>
                    <div className={this.state.menuBar ? "change bar3":"bar3"}></div>
                </div>
                <div className="sideBar">
                    <p>Gallery</p>
                    <p>Location</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
            </div>
        )
    }
}

export default Header;