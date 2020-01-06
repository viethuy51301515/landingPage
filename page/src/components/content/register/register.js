import React from 'react';
import './register.scss';
import {Form,Input,Icon,Row,Col,Button,Tooltip } from 'antd';
class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
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
                {getFieldDecorator('nameContact', {
                    rules: [{ required: true, message: 'Vui lòng nhập số điện thoại' }],
                })(
                <Input placeholder='SỐ ĐIỆN THOẠI' id='phoneContact' />
                )}
          </Form.Item>     
          <Form.Item >
                <Input placeholder='EMAIL' id='emailContact'/>
         
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