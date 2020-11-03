// Dependencies
import { ReactElement, ReactNode } from 'react'
// Common Components
import CustomHead from '../common/components/CustomHead.components'
// Components
import Header from '../components/Header/Header.component'
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
      <Header />
      {children}
      <Footer />
    </>
  )
}
