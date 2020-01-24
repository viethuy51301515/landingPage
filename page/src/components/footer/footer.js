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
                    <h1>Liên Hệ</h1>
                    <div className='contact-info'>
                        <h3>Anh Ngữ Skyscraper</h3>
                        <h3>84B Hồ Văn Long</h3>
                        <h3>Bình Hưng Hòa B, Bình Tân, Hồ Chí Minh</h3>
                        <h3>0286 266 9933</h3>   
                        <h3>info@example.com</h3>   
                    </div>
                </div>
                <div className='footer-about'>
                    <h1>Trung Tâm Anh Ngữ</h1>
                    <div className="about-info">
                        <div>
                            <p>
                                Quận 3
                            </p>
                            <p>
                                140/20 lương son bá chúc anh đài
                            </p>
                            <p>
                                01264895603
                            </p>
                        </div>
                        <div>
                            <p>
                                Quận 10
                            </p>
                            <p>
                                140/20 lương son bá chúc anh đài, 321, 321, 32
                            </p>
                            <p>
                            01264895603
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="social-contact">
                    <h1>Follow us</h1>
                    <a><img src={require('../../assets/facebook.png')} alt=""/></a>
                    <a><img src={require('../../assets/youtube.png')} alt=""/></a>
                </div>
            </div>
        )
    }
}
export default Footer;