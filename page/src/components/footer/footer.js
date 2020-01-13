import React from 'react';
import './footer.scss';
const facebookIc = require('../../assets/facebook.png')
class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='footer' id='contact-id'> 
                <div className='footer-contact'>
                    <h1>Contact</h1>
                    <div className='contact-info'>
                        <h3>Lorem ipsum dolor sit amet consectetrttur adipisicing labore et trtdol</h3>
                        <h3>100 Madison St., Alexandria, VA, US</h3>
                        <h3>123 456-7890</h3>   
                        <h3>info@example.com</h3>   
                    </div>
                </div>
                <div className='footer-about'>
                    <h1>About</h1>
                    <div className="about-info">
                        <h3>
                            About Us
                        </h3>
                        <h3>
                            Teachers
                        </h3>
                        <h3>
                            Syllabus
                        </h3>
                    </div>
                    
                </div>
                <div className="social-contact">
                    <h1>Follow us</h1>
                    <img src={require('../../assets/facebook.png')} alt=""/>
                    <img src={require('../../assets/youtube.png')} alt=""/>
                </div>
            </div>
        )
    }
}
export default Footer;