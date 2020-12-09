import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://alibrate.com">Alibrate University!</a>
        </h1>
        <h2>
          Data from API: {data.text}
        </h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Alibrate University
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {data} = await axios.get(`http://${process.env.API}/`)
  console.log('data', data)
  return {
    props: {
      data
    }
  }
}