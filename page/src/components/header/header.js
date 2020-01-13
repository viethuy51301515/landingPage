import React from 'react';
import {Menu,Icon} from 'antd';
import './header.scss';
import {Link} from 'react-router-dom';
const {SubMenu} = Menu;
class Header extends React.Component{
    constructor(props){
        super(props);
        this.changeSite = this.changeSite.bind(this);
    }
    changeSite(type){
        switch (type) {
            case 'facebook':
                window.open('https://www.facebook.com/viethuy.phan')
                break;
            case 'youtube':
                window.open('https://www.youtube.com');
                break;
            case 'instagram':
                window.open('https://www.instagram.com');
            default:
                break;
        }
    }
    render(){
        return(
            <div>
                <div className='top-header'>
                    <ul className='infor'>
                        <li>
                            <Icon type="phone" />
                            <span>0764895603</span>
                        </li>
                        <li>
                            <Icon type="mail" />
                            <span>tuvan@gmail.com</span>
                        </li>
                    </ul>
                    <ul className="social-contact">
                        <li>
                            <Icon type="facebook" onClick={ () => this.changeSite("facebook") }/>
                        </li>
                        <li>
                            <Icon type="instagram" onClick={ () => this.changeSite("instagram") } />
                        </li>
                        <li>
                            <Icon type="youtube" onClick={ () => this.changeSite("youtube") }/>
                        </li>
                    </ul>
                </div>
                <div className='main-header'>
                        <div className='logo'>

                        </div>
                        <div className='menu-layout'>
                        <Menu mode='horizontal' className='menu' >
                            <Menu.Item key='1'>
                                    <a href='/'>Home</a>
                            
                            </Menu.Item>
                            <Menu.Item key='3'>

                                <span>
                                     <a className='menu-ref' href="#about-us">About Us</a> 
                                </span>
                            </Menu.Item>
                            <Menu.Item key='4'>

                                <span>
                                   <a className='menu-ref' href="#course-id">Courses</a>
                                </span>
                            </Menu.Item>       
                            <Menu.Item key='5'>

                                <span>
                                   <a className='menu-ref' href="#teacher-id">Teachers</a> 
                                </span>
                            </Menu.Item>  
                            <Menu.Item key='8'>

                                <span>
                                    <a className='menu-ref' href="#contact-id">Contact Us</a> 
                                </span>
                            </Menu.Item>          
                        </Menu>
                        </div>
                        
                </div>
                    
            </div>
        )
    }
}
export default Header;