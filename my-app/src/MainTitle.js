import { Component } from 'react';
import './css/MainTitle.css';

class MainTitle extends Component{

    render(){
        return(
            <div className="TitleContainer">
                <p className="Title">Paz Construction & Drywall, Inc.</p>
                <p className="Subtext">your roofing experts | licensed, bonded and insured</p>
            </div>
        )
    }
}

export default MainTitle;