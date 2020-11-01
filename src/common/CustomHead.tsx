import { ReactElement } from 'react'
import Head from 'next/head'

interface ICustomHead {
  title?: string
}

export default function CustomHead({
  title = 'Rules Of Thumb.'
}: ICustomHead): ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <script
        src="https://kit.fontawesome.com/4079afdc3f.js"
        crossOrigin="anonymous"
      />
    </Head>
  )
}
