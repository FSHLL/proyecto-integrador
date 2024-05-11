import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import appFirebase from './firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, 
    signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const Login = () => {
    const navigate = useNavigate();
    const auth = getAuth(appFirebase)
    const [form] = Form.useForm(); 
    const [registered, setRegistered] = useState(false)

    const onFinish = async ({ username, password }) => {
        if(registered) {
            try {
                await createUserWithEmailAndPassword(auth, username, password);
                alert("Usuario registrado correctamente");
            } catch (error) {
                alert("Error en el registro");
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, username, password);
                navigate('game')
            } catch (error) {
                alert("El usuario y/o la contraseña son incorrectos");
            }
        }
        form.resetFields();
    };

    const onClick = async (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        try {
          await signInWithPopup(auth, provider)
          navigate('game')
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <>
            <Form
                form={form}
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ width: 400 }}
            >
                <Form.Item
                    name="username"
                    rules={[{ message: 'Please input your Username!' }]}
                >
                    <Input
                        prefix={<UserOutlined 
                        className="site-form-item-icon" />} 
                        placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                {/* <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        {registered? <p></p> : <Checkbox>Remember me</Checkbox>}
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    {registered? "" : "Forgot password"}
                    </a>
                </Form.Item> */}

                <Form.Item>
                    <Button block type="primary" htmlType="submit" className="login-form-button">
                        {registered? "Sign up" : "Log in"}
                    </Button>
                    {registered? <p></p> : <Button onClick={onClick} block type="button" className="btn btn-info" id="googleLogin" style={{border: '3px solid gray', marginTop: '20px'}}>
                        Google
                    </Button>}
                    <p>{registered? "Si ya tienes cuenta " : "No tienes cuenta "}<Button onClick={() => setRegistered(!registered)} style={{backgroundColor: 'darkblue', color: 'white' }}>{registered? "Inicia sesión" : "Registrate"}</Button></p>
                </Form.Item>
            </Form>
        </>
    );
};