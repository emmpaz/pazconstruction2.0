import { Component } from "react";
import './css/ImagePop.css';
import x from './pics/x-button.png';

class ImagePop extends Component{


    render(){
        return(
            <div className="ImagePopContainer">
                <div className="PopContainer">
                     <img className="PoppedImage" alt='popped out' src={this.props.image}></img>
                     <p className= "x" alt='leave'onClick={this.props.buttonClick}>CLOSE</p>
                </div>
            </div>
        )
    }
}

export default ImagePop;