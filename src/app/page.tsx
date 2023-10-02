import styles from './page.module.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className={styles.main}>
      {session ? (
        <h1>{`SEJA BEM VINDO ${session.user?.name}`}</h1>
      ) : (
        <h1>OLA! ENTRE</h1>
      )}
      Home
    </main>
  )
}