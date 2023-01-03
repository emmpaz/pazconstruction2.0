import React, {Component} from 'react';
import facebook from './pics/facebook.svg';
import mail from './pics/mail.svg';
import './css/Contact.css';

class Contact extends Component{

    render(){
        return(
            <div className="ContactContainer">
                <div className="ContactTitleContainer">
                    <p ref={this.props.title}>Contact</p>
                </div>
                <div className="iconContainer">
                    <a href="https://www.facebook.com/profile.php?id=100032868776105" target="_blank" rel="noopener noreferrer">
                        <img className="facebook" src={facebook} alt='facebook'></img>
                    </a>
                    <a href="mailto: constructionpaz@gmail.com" rel="noopener noreferrer">
                        <img className="mail" src={mail} alt='mail'></img>
                    </a>
                    <a href="tel:3163051306" style={{color: 'black', }} rel="noopener noreferrer">
                    <p className="number">316-305-1306</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;