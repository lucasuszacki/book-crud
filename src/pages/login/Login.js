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
      console.log("Response: ", data);
  
      if(data.access_token){
        localStorage.setItem('app-token', data.access_token)
        history.push('/')
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  return (
    <>
      <h1>Login</h1>
      <p>Fill the fields to continue</p>
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
    </>
  )
}

export default Login;
