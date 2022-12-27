import { Component } from "react";
import './css/ImagePop.css';
import image from './images/broadway1.png';
import x from './pics/x-button.png';

class ImagePop extends Component{


    render(){
        return(
            <div className="ImagePopContainer">
                <div className="PopContainer">
                     <img className="PoppedImage" src={image}></img>
                     <img src={x} className= "x" onClick={this.props.buttonClick}></img>
                </div>
            </div>
        )
    }
}

export default ImagePop;