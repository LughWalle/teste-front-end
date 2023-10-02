'use client';
import Button from '@/components/Button';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
  }, [router]);
  return (
    <div>
      <h1>Entre e divirta-se</h1>
      <Button variant={'primary'} href='/signin'>
        Login
      </Button>
      <Button variant={'danger'} href='/signup'>
        SingUp
      </Button>
    </div>
  );
};

export default Login;
