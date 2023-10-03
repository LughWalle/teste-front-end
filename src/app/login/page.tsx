'use client';
import Button from '@/app/components/Button';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './styles.module.scss';

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    async function checkSession() {
      const session = await getSession();
      if (session) {
        router.push('/');
      }
    }

    checkSession();
  }, []);
  return (
    <div className={styles.container}>
      <h1>Entre e divirta-se</h1>
      <Button variant={'primary'} href='/signin'>
        Login
      </Button>
    </div>
  );
};

export default Login;
