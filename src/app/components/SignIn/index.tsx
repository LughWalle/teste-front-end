'use client'
import * as yup from 'yup';
import Button from '../Button';
import { getSession, signIn } from 'next-auth/react';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';

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
        router.back()
        
      }
    }

    checkSession();
  }, [router]);
  return (
    <>
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
            });
          } catch (error) {
            setIsAuthError(true); // Define isAuthenticationError como verdadeiro em caso de erro de autenticação
          }
        }}
        validationSchema={validSchema}
      >
        {({ errors, touched, values: {  email, password } }) => {
          return (
            <Form>
              <label htmlFor='email'>E-mail</label>
              <Field id='email' name='email' type='email' />
              {touched.email && errors.email ? <div>{errors.email}</div> : null}
              <Field name='password' className='input input-bordered'></Field>
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
    </>
  );
};

export default SignInPage;
