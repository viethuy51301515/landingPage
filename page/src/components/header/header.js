import React from 'react';
import {Menu,Icon,Drawer} from 'antd';
import './header.scss';
import {Link} from 'react-router-dom';
const {SubMenu} = Menu;
const logoImage = require('../../assets/logo_red.png');
// When the user scrolls the page, execute myFunction

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSideMenuToogle : false,
            drawerVisible:false
        }
        this.changeSite = this.changeSite.bind(this);
        this.toogleSideMenu = this.toogleSideMenu.bind(this);
        this.onClose = this.onClose.bind(this);

    }
    onClose = () => {
        this.setState({
            drawerVisible: false,
        });
      };
    toogleSideMenu(){
        this.setState({
            drawerVisible:true
        })
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
                <div className='main-header' id='main-header'>
                        <div className='logo'>
                            <a href='/'>
                                <img src={logoImage} alt=""/>
                                <h3>SLC</h3>
                            </a>
                        </div>
                        <div className='menu-layout'>
                        <Menu mode='horizontal' className='menu' >
                            <Menu.Item key='1'>
                                    <a href='/'>Trang Chủ</a>
                            
                            </Menu.Item>
                            <Menu.Item key='3'>

                                <span>
                                     <a className='menu-ref' href="#about-us">Về Chúng tôi</a> 
                                </span>
                            </Menu.Item>
                            <Menu.Item key='4'>

                                <span>
                                   <a className='menu-ref' href="#course-id">Khóa Học</a>
                                </span>
                            </Menu.Item>     
                            <Menu.Item key='6'>
                                <span>
                                        {/* <a  href="#event-id"> */}
                                        <Link className='menu-ref' to={'/event'}>Event
                                        </Link>
                                </span>
                            </Menu.Item>   
                            <Menu.Item key='5'>

                                <span>
                                   <a className='menu-ref' href="#teacher-id">Đội Ngũ Giáo Viên</a> 
                                </span>
                            </Menu.Item>  
                            <Menu.Item key='8'>

                                <span>
                                    <a className='menu-ref' href="#contact-id">Liên Hệ</a> 
                                </span>
                            </Menu.Item>          
                        </Menu>
                        </div>
                        <div className='hamburger-button' onClick={this.toogleSideMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> 
                        {/* <div className='nav-menu' id='nav-menu'> */}
                            <Drawer
                                title=" "
                                placement="right"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.drawerVisible}
                            >
                                <Menu mode='vertical' className='menu-side-bar' >
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
                                    <Menu.Item key='6'>
                                        <span>
                                            <a className='menu-ref' href="#event-id">Event</a>
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
                            </Drawer>
                        {/* </div> */}
                </div>

            </div>
        )
    }
}
export default Header;