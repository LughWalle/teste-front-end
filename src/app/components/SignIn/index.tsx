'use client'
import * as yup from 'yup';
import Button from '../Button';
import { getSession, signIn } from 'next-auth/react';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import styles from './styles.module.scss';
interface Credentials {
  email: string;
  password: string;
}

const SignInPage = () => {
  const [isAuthError, setIsAuthError] = useState(false)
  const router = useRouter();
  const validSchema = yup.object({
    email: yup
      .string()
      .email('E-mail inválido.')
      .required('O campo é obrigatório.'),
    password: yup
      .string()
      .required('O campo é obrigatório.')
  });
  useEffect(() => {
    async function checkSession() {
      const session = await getSession();
      if (session) {
        router.push('/')
        router.refresh()
      }
    }

    checkSession();
  }, [router]);
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          try {
            signIn('credentials', {
              email: values.email,
              password: values.password,
              callbackUrl: 'https://localhost:3000'
            });
          } catch (error) {
            setIsAuthError(true);
          }
        }}
        validationSchema={validSchema}
      >
        {({ errors, touched, values: {  email, password } }) => {
          return (
            <Form className={styles.form}>
              <label htmlFor='email'>E-mail
              <Field id='email' name='email' type='email' />
              </label>
              {touched.email && errors.email ? <div>{errors.email}</div> : null}
              <label htmlFor='password'>
                Senha
              <Field name='password' type='password' className='input input-bordered'></Field>
              </label>
              {!!errors.password && (
                <p className='text-error'>{errors.password}</p>
              )}
              <Button variant='danger'>Entrar</Button>
            </Form>
          );
        }}
      </Formik>
      <span>ou com uma conta</span>
      <div>
        <Button variant='primary' onClick={() => signIn('google')}>
          google
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
