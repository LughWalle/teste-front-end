'use client'
import Modal from '@/app/components/Modal'
import SignIn from '@/app/components/SignIn'
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const SignInPage = () => {
  const router = useRouter();
  useEffect(() => {
    async function checkSession() {
      const session = await getSession();
      if (session) {
        router.push('/')
        
      }
    }

    checkSession();
  }, [router]);
  return (
    <Modal>
        <SignIn />
    </Modal>
  )
}

export default SignInPage