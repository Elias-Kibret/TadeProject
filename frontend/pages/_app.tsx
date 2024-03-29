
import React,{createContext} from 'react'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }: AppProps) {
 


  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}


export default MyApp
