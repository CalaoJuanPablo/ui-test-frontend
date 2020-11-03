// Dependencies
import { ReactElement } from 'react'
// Components
import HeroVoter from '../HeroVoter/HeroVoter.component'
// Styles
import styles from './HeroCard.module.scss'

export default function HeroCard(): ReactElement {
  return (
    <div className={styles.HeroCard}>
      <div className={styles.HeroCard__content}>
        <small className={styles.HeroCard__pre_title}>
          What&apos;s your opinion on
        </small>
        <h1 className={styles.HeroCard__title}>Pope Francis?</h1>
        <p className={styles.HeroCard__description}>
          He’s talking tough on clergy sexual abuse, but is he just another
          papal pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumbs up)
        </p>
        <a
          className={styles.HeroCard__link}
          href="https://wikipedia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-wikipedia-w"></i>
          <span className={styles['HeroCard__link--text']}>
            More information
          </span>
        </a>
        <h4 className={styles.HeroCard__question}>What&apos;s Your Veredit?</h4>
      </div>
      <HeroVoter />
    </div>
  )
}
