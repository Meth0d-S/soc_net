import React from "react";
import {Field, Form} from 'react-final-form'
import styles from './Login.module.css'
import {Input} from "../common/Forms/Input/Input";
import {composeValidators, maxLength, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
  const onSubmit = (values) => {
    return props.login(values.email, values.password, values.rememberMe)
  }

  if (props.isAuth === true) {
    return <Redirect to='/profile'/>
  }

  return (
    <>
      <h1 className={styles.header}>Login</h1>
      <LoginForm onSubmit={onSubmit}/>
    </>
  )
}

const LoginForm = props => (
  <Form
    onSubmit={props.onSubmit}
    render={({handleSubmit, form, submitting, pristine, values}) => (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <Field name={'email'} component={Input} type={'text'} placeholder={'Login'} validate={composeValidators(required, maxLength(30))}/>
        </div>
        <div>
          <Field name={'password'} component={Input} type={'password'} placeholder={'Password'} validate={composeValidators(required)}/>
        </div>
        <div>
          <label>
            <Field name={'rememberMe'} component={Input} type={'checkbox'}/> remember me
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )}
  />)


let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login)