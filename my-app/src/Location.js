import { Component } from "react";
import './css/Location.css';
import kansas from './pics/kansas.png';

class Location extends Component{
    
    render(){
        return(
            <div className="LocationContainer">
                <div className="LocationTitleContainer">
                    <p ref={this.props.title}>Location</p>
                </div>
                <div className="LocationParagraphContainer">
                    <p>we do jobs all over kansas.</p>
                </div>
                <div className="LocationImageContainer">
                    <div className="ImageContainer">
                       <img className="KansasImage" alt='kansas state' src={kansas}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Location;