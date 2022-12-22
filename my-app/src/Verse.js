import { Component } from "react";
import './css/Verse.css';

class Verse extends Component{
    
    render(){
        return(
            <div className="VerseContainer">
                <p className="Verse">And whatever you do in word or deed, do all in the name of the Lord Jesus, 
giving thanks to God the Father through him - Col 3:17
                </p>
            </div>
        )
    }
}

export default Verse;