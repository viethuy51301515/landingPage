import React from 'react';
import './sideMenu.scss';
import {Icon,Button} from 'antd';
class SideMenu extends React.Component{
    constructor(props){
        super(props);
        this.nameAction = this.nameAction.bind(this);
        this.submit = this.submit.bind(this);
    }
    nameAction(key){
        let value = document.getElementById(key).value;
        let labelSelected = document.getElementById(`${key}-label`);
        console.log(value);
        if(value != "") 
            labelSelected.classList.add('clicked');
        else labelSelected.classList.remove('clicked');
    }
    submit(){
        document.getElementById("form-id").submit();
    }
    render(){
        return(
            <div className='side-menu-layout'>
                <form action="mailto:viethuy51301515@gmail.com" method='post' enctype="text/plain" id='form-id'>
                    <div className='side-menu-1'>
                        <Icon type="edit" theme="twoTone" />
                        <h3>Nhận Thông Tin</h3>
                    </div>
                    <div className='side-menu-2'>
                        
                        <div className='side-menu-child'>
                            <input id='name' key='text' onChange={() => this.nameAction('name')} />
                            <label id='name-label'>Tên của bạn ?</label>
                            <div></div>
                        </div>
                        <div className='side-menu-child'>
                            <input id='phone' onChange={() => this.nameAction('phone')} />
                            <label id='phone-label'>Số Điện Thoại Của Bạn?</label>
                            <div></div>
                        </div>
                        <div className='side-menu-child'>
                            <input id='email' onChange={() => this.nameAction('email')} />
                            <label id='email-label'>Email Của Bạn ?</label>
                            <div></div>
                        </div>
                    </div>
                    <div className='side-menu-3' onClick={this.submit}>
                        <Icon type="check-circle" theme="twoTone" />
                        <h3>Gửi</h3>
                    </div>
                </form>
            </div>
        )
    }
}

export default SideMenu;