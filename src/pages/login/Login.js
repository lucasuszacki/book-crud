import React from 'react';

import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom'
import { login } from '../../services/authService';

import './Login.css'

const Login = () => {
  const history = useHistory();

  const handleSubmit = async values => {
    try {
      const { data } = await login(values);  
      if(data.access_token){
        localStorage.setItem('app-token', data.access_token)
        history.push('/')
      }
      else {
        alert('E-mail ou senha incorreto.')
      }
    } catch (error) {
      console.log("Error: ", error);
      alert('E-mail ou senha incorreto.')
    }
  }

  const validations = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
    password: yup.string().min(8).required('Campo Obrigatório')
  })

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
        <Form className="Login">
          <div className="Login-Group">
            <Field name="email" className="Login-Field" />
            <ErrorMessage component="span" name="email" className="Login-Error" />
          </div>
          <div className="Login-Group">
            <Field name="password" className="Login-Field" />
            <ErrorMessage component="span" name="password" className="Login-Error" />
          </div>
          <button className="Login-Btn" type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login;
