import { ReactElement, ReactNode } from 'react'
import CustomHead from '../common/components/CustomHead'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

interface IMainLayout {
  title?: string
  children: ReactNode
}

export default function MainLayout({
  title,
  children
}: IMainLayout): ReactElement {
  return (
    <>
      <CustomHead title={title} />
      <Header />
      {children}
      <Footer />
    </>
  )
}
