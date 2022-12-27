import { Component } from "react";
import './css/Gallery.css';
import ImagePop from "./ImagePop";
import image from './images/broadway1.png';

class Gallery extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            popOut : false
        };

    }

    activatePopOut = () =>{
        this.setState(prevState => ({
            popOut: !prevState.popOut
        }));
    };

    if(popOut){

    }
    render(){
        return(
            <div className="GalleryContainer">
                <div className="GalleryTitleContainer">
                    <p ref={this.props.title}>Gallery</p>
                </div>
                <div className="GalleryImageContainer">
                    <div className="OnlyImage">
                        <img className="image" onClick={this.activatePopOut} src={image}></img>
                    </div>
                    {
                        this.state.popOut ? <ImagePop buttonClick={this.activatePopOut.bind(this)}/> : <></>
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;