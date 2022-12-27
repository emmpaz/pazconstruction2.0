import { Component } from "react";

class AboutUs extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="LocationContainer">
                <div className="LocationTitleContainer">
                    <p ref={this.props.title}>About us</p>
                </div>
                <div className="LocationParagraphContainer">
                    <p>we do jobs all over kansas.</p>
                </div>
            </div>
        )
    }
}

export default AboutUs;