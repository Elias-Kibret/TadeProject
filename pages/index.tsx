import type { NextPage } from 'next'
import Head from 'next/head'
import Index from '../Container/Home'
const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Index/>
    </div>
  )
}

export default Home
