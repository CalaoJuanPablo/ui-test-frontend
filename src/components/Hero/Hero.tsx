import { ReactElement } from 'react'
import Header from '../Header/Header'
import HeroBottomBanner from '../HeroBottomBanner/HeroBottomBanner.component'
import HeroCard from '../HeroCard/HeroCard'
import styles from './Hero.module.scss'

export default function Hero(): ReactElement {
  return (
    <section className={styles.Hero}>
      <Header isHome />
      <div className={styles.Hero__container}>
        <HeroCard />
      </div>
      <HeroBottomBanner />
    </section>
  )
}
