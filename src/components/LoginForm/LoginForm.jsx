import React from 'react';
import { Formik } from 'formik';
import shortid from 'shortid';
import {
  FormLayout,
  Form,
  LoginLabel,
  LoginInput,
  LoginBtn,
  LoginBtnBlock,
  ErrorText,
} from './LoginForm.styled';
// import firebase from 'firebase/compat/app';
import { addUser, logInUser} from '../../service/FirebaseApi';
import 'firebase/compat/auth';

const LoginForm = () => {
  const emailID = shortid.generate();
  const passwordlID = shortid.generate();

  const signUp = obj => {
    addUser(obj);
  };
  const logIn = obj => {
    // const { email, password } = obj;
    // const users = logInUser();
  };
  return (
    <FormLayout>
      <p>Or log in using an email and password, after registering:</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'This is a required field';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'This is a required field';
          }
          return errors;
        }}
        onSubmit={values => {
         logIn(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <LoginLabel htmlFor={emailID}>Email:</LoginLabel>
            <LoginInput
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              id={emailID}
              placeholder="your@email.com"
            />
            <ErrorText>
              {errors.email && touched.email && errors.email}
            </ErrorText>
            <LoginLabel htmlFor={passwordlID}>Password:</LoginLabel>
            <LoginInput
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              id={passwordlID}
              placeholder="Password (min 8 characters)"
              pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{8,}"
            />
            <ErrorText>
              {errors.password && touched.password && errors.password}
            </ErrorText>

            <LoginBtnBlock>
              <LoginBtn type="submit" disabled={isSubmitting}>
                {'Log in'.toUpperCase()}
              </LoginBtn>
              <LoginBtn
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  signUp(values);
                }}
              >
                {'Registration'.toUpperCase()}
              </LoginBtn>
            </LoginBtnBlock>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default LoginForm;
