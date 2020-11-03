// Dependencies
import { ReactElement, ReactNode } from 'react'
// Common Components
import CustomHead from '../common/components/CustomHead.components'
// Components
import Hero from '../components/Hero/Hero.component'
import Footer from '../components/Footer/Footer.component'

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
