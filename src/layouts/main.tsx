import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'
import Header from '../components/Header/Header'

interface IMainLayout {
  children: ReactNode
}

export default function MainLayout({ children }: IMainLayout): ReactElement {
  return (
    <div>
      <Head>
        <title>Rule of Thumb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  )
}
