import React from 'react'
import './Login.css'
import { Form, Icon, Input, Button } from 'antd';
import login from 'SERVICE/login'
import showMessage from 'UTIL/globalTips/showMessage'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const {resultCode, resultMessage} = await login(values);
        if (resultCode === 0){
          this.props.history.push('/');
        }else {
          showMessage(resultMessage);
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginPage">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'300px'}}>
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;