import React from 'react';
import './register.scss';
import {Form,Input,Icon,Row,Col,Button,Tooltip,notification } from 'antd';
import { addData } from '../../../actions';
import { connect } from 'react-redux';
import $ from 'jquery';
class RegistrationFormTemp extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          var date = new Date();
          var data = {
            name:values.nameContact,
            phone:values.phoneContact,
            email:values.emailContact,
            date:  date.getDate() + '/'+date.getMonth()+1 + '/' +  date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()
          }
          this.props.addNewInfor(data);
          $.ajax({
            type : 'GET', 
            url : 'https://script.google.com/macros/s/AKfycbxsvZRW7nN5WM2m5iY1gDZWDVmBK63A82aId9UEXf8a95gyUQA/exec',
            dataType:'json',
            crossDomain : true,
            data : data,
            success : function(data)
            { 
            }
        });
          notification['success']({
            message: 'Thông Báo',
            description:"Cảm ơn bạn đã đăng ký, thông tin của bạn đã được gửi về bộ phận tuyển sinh."
          });
          this.props.form.resetFields();
          console.log('Received values of form: ', values);
        }
      });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 5},
          sm: { span: 5 },
        },
        labelAlign:'left',
        wrapperCol: {
          xs: { span: 19 },
          sm: { span: 19 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
        labelCol:{
          span:6
        }
      };
  
      return (
        <Form  onSubmit={this.handleSubmit}>
          <Form.Item 
          >
              {getFieldDecorator('nameContact', {
                rules: [{ required: true, message: 'Vui Lòng nhập họ tên' }],
            })(
              <Input placeholder='HỌ VÀ TÊN CỦA BẠN' id='nameContact'/>
            )}
              </Form.Item>
          <Form.Item >
                {getFieldDecorator('phoneContact', {
                    rules: [{ required: true, message: 'Vui lòng nhập số điện thoại' }],
                })(
                <Input placeholder='SỐ ĐIỆN THOẠI' id='phoneContact' />
                )}
          </Form.Item>     
          <Form.Item >
              {getFieldDecorator('emailContact', {
                    rules: [{type:"email", message: 'Vui lòng nhập email' }],
                })(
                <Input placeholder='EMAIL' id='emailContact'/>
                )}
          </Form.Item>   
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  const mapDispatchToProps = (dispatch)=>{
    return(
      {
        addNewInfor: (data) =>{
          dispatch(addData(data));
        }
      }
    )
  }
  const RegistrationForm = connect(null,mapDispatchToProps)(RegistrationFormTemp);
  const RegisForm = Form.create({name:"studentDetail"})(RegistrationForm);
class Register extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='register-layout'>
                <main>
                    <h1 id="title">
                            Đăng ký
                    </h1>
                    <p id="description">
                            Nhận Tự vấn miễn phí
                    </p>
                    <form id="survey-form">
                        <RegisForm />
                        
                    </form>
                </main>
            </div>
        )
    }
}
export default Register;