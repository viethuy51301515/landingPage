import React from 'react';
import {Menu,Icon} from 'antd';
import './header.scss'
const {SubMenu} = Menu;
class Header extends React.Component{
    constructor(props){
        super(props);
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
                            <Icon type="facebook" />
                        </li>
                        <li>
                            <Icon type="instagram" />
                        </li>
                        <li>
                            <Icon type="google" />
                        </li>
                        <li>
                            <Icon type="youtube" />
                        </li>
                    </ul>
                </div>
                <div className='main-header'>
                        <div className='logo'>

                        </div>
                        <div className='menu-layout'>
                        <Menu mode='horizontal' className='menu' >
                            <Menu.Item key='1'>

                                <span>
                                    Home
                                </span>
                            </Menu.Item>
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                    <Icon type="setting" />
                                    Nhome
                                    </span>
                                }
                            >
                                <Menu.Item key='2'>
                                    <span>home2</span>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key='3'>

                                <span>
                                    Home
                                </span>
                            </Menu.Item>
                            <Menu.Item key='4'>

                                <span>
                                    Home
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