import { Component } from "react";
import './css/Gallery.css';
import ImagePop from "./ImagePop";
import image1 from './images/broadway1.png';
import image2 from './images/broadway2.png';
import image3 from './images/bathroom.png';
import image4 from './images/pool-deck.png';
import arrow from './images/forward.png';

class Gallery extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            popOut : false,
            index : 0
        };
        
        this.imagesArray = [
            image1,
            image2,
            image3,
            image4
        ]

    }

    activatePopOut = () =>{
        this.setState(prevState => ({
            popOut: !prevState.popOut
        }));
    };

    carouselForward = () =>{
        this.setState(prevState => ({
            index: (prevState.index + 1) % this.imagesArray.length
        }));
        console.log(this.state.index)
    }

    carouselBack = () =>{
        this.setState(prevState => ({
            index: (prevState.index === 0) ? this.imagesArray.length - 1 : prevState.index - 1
        }));
        console.log(this.state.index)
    }

    render(){
        return(
            <div className="GalleryContainer">
                <div className="GalleryTitleContainer">
                    <p ref={this.props.title}>Gallery</p>
                </div>
                <div className="GalleryImageContainer">
                        
                    <img className="backArrow" src={arrow} onClick={this.carouselBack}></img>
                    <div className="OnlyImage">
                        <img className="image" onClick={this.activatePopOut} src={this.imagesArray[this.state.index]}></img>
                    </div>
                    {
                        this.state.popOut ? <ImagePop buttonClick={this.activatePopOut.bind(this)}/> : <></>
                    }
    
                     <img className="forwardArrow" src={arrow} onClick={this.carouselForward}></img>
                   
                </div>
            </div>
        )
    }
}

export default Gallery;