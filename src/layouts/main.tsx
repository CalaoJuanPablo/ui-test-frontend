import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

interface IMainLayout {
  children: ReactNode
}

export default function MainLayout({ children }: IMainLayout): ReactElement {
  return (
    <div>
      <Head>
        <title>Rule of Thumb</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/4079afdc3f.js"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
