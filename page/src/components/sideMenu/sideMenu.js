import React from 'react';
import './sideMenu.scss';
import {Icon,Button,notification} from 'antd';
import {useSelector,useDispatch} from 'react-redux';
import {todosRef} from '../../firebase';
const openNotificationWithIcon = (type,content) => {
    notification[type]({
      message: 'Thông Báo',
      description:content
    });
  };
class SideMenu extends React.Component{
    constructor(props){
        super(props);
        this.nameAction = this.nameAction.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            name:"",
            phone:"",
            email:"",
            date:new Date()
        }
    }
    nameAction(key){
        let value = document.getElementById(key).value;
        let labelSelected = document.getElementById(`${key}-label`);
     
        switch (key) {
            case "name":
                this.setState({
                    "name":value
                })
                break;
            case "phone":
                this.setState({
                    "phone":value
                })
                break;
            case "email":
                this.setState({
                    "email":value
                })
                break;
            default:
                break;
        }
        console.log(this.state);
        if(value != "") 
            labelSelected.classList.add('clicked');
        else labelSelected.classList.remove('clicked');
    }
    submit(){
        if(this.state.name == "" ){
            openNotificationWithIcon("warning","Vui lòng nhập họ và tên")
            return;
        }
        if(this.state.phone == "" ){
            openNotificationWithIcon("warning","Vui lòng nhập số điện thoại")
            return;
        }
        todosRef.push().set(this.state);
        this.setState({
            name:"",
            phone:"",
            email:""
        })
        openNotificationWithIcon('success',"Cảm ơn bạn đã đăng ký, thông tin của bạn đã được gửi về bộ phận tuyển sinh.");
        // document.getElementsByClassName("side-menu-layout")[0].style.right = '-260px';
    }
    render(){
        return(
            <div className='side-menu-layout'>
                <form  method='post' enctype="text/plain" id='form-id'>
                    <div className='side-menu-1'>
                        <Icon type="edit" theme="twoTone" />
                        <h3>Nhận Thông Tin</h3>
                    </div>
                    <div className='side-menu-2'>
                        
                        <div className='side-menu-child'>
                            <input id='name' key='text' value={this.state.name} onChange={() => this.nameAction('name')} />
                            <label id='name-label'>Tên của bạn ?</label>
                            <div></div>
                        </div>
                        <div className='side-menu-child'>
                            <input id='phone' value={this.state.phone} onChange={() => this.nameAction('phone')} />
                            <label id='phone-label'>Số Điện Thoại Của Bạn?</label>
                            <div></div>
                        </div>
                        <div className='side-menu-child'>
                            <input id='email' value={this.state.email} onChange={() => this.nameAction('email')} />
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