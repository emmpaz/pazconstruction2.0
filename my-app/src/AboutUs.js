import { Component } from "react";
import './css/AboutUs.css';

class AboutUs extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="AboutUsContainer">
                <div className="AboutUsTitleContainer">
                    <p ref={this.props.title}>About us</p>
                </div>
                <div className="AboutUsParagraphContainer">
                    <p>
                        we are a construction company that does everything
                        from roofing to a full remodel job. we communicate and
                        listen to our customers till their needs are met.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutUs;