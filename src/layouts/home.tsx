import { ReactElement, ReactNode } from 'react'
import CustomHead from '../common/CustomHead'
import Header from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'

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
      <Hero />
      {children}
      <Footer />
    </>
  )
}
