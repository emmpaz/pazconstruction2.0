import { Component } from "react";
import './css/Gallery.css';
import ImagePop from "./ImagePop";
import image from './images/broadway1.png';

class Gallery extends Component{

    render(){
        return(
            <div className="GalleryContainer">
                <div className="GalleryTitleContainer">
                    <p>Gallery</p>
                </div>
                <div className="GalleryImageContainer">
                    <div className="OnlyImage">
                        <img className="image" src={image}></img>
                    </div>
                    <ImagePop/>
                </div>
            </div>
        )
    }
}

export default Gallery;