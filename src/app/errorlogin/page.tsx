import Button from '@/app/components/Button';
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
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
      <h1>Usuário e senha incorretos!</h1>
      <p>Por favor, verifique suas credenciais e tente novamente.</p>
      <Button variant={'primary'} href='/signin'>
        Login
      </Button>
    </div>
  );
};

export default ErrorPage;
