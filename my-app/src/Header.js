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

    handleResize = () => {
        if (window.innerWidth > 600) {
            this.setState(() => ({
            menuBar : false
        }))
        }
    }
      
      // create an event listener
    componentDidMount(){
        window.addEventListener("resize", this.handleResize)
    }

    render(){
        return(
            <div className="Header">
                <div className="GalleryHeaderContainer">
                    <p style={{cursor: 'pointer'}}>contact</p>
                    <p style={{cursor: 'pointer'}} onClick={this.props.galleryClick}>gallery</p>
                </div>
                <div className="logo">
                    <img className="img-logo" alt='company logo'src={logo}></img>
                </div>
                <div className="LocationHeaderContainer">
                    <p style={{cursor: 'pointer'}} onClick={this.props.locationClick}>location</p>
                    <p style={{cursor: 'pointer'}} onClick={this.props.aboutUsClick}>about us</p>
                </div>
                <div className={this.state.menuBar ? "containerOn" : "container"} onClick={this.menuBarToggle}>
                    <div className={this.state.menuBar ? "change bar1":"bar1"}></div>
                    <div className={this.state.menuBar ? "change bar2":"bar2"}></div>
                    <div className={this.state.menuBar ? "change bar3":"bar3"}></div>
                </div>
                <div className={this.state.menuBar ? "sideBarOn" : "sideBar"}>
                    <div className="sideContentContainer">
                        <p onClick={this.props.galleryClick}>Gallery</p>
                        <p onClick={this.props.locationClick}>Location</p>
                        <p onClick={this.props.aboutUsClick}>About Us</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;