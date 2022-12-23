import { Component } from "react";
import './css/ImagePop.css';
import image from './images/broadway1.png';

class ImagePop extends Component{


    render(){
        return(
            <div className="ImagePopContainer">
                <div className="PopContainer">
                    {/* <img className="image" src={image}></img> */}
                </div>
            </div>
        )
    }
}

export default ImagePop;