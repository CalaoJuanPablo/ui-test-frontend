import { ReactElement } from 'react'
import styles from './HeroVoter.module.scss'

export default function HeroVoter(): ReactElement {
  return (
    <div className={styles.HeroVoter}>
      <div className={styles['HeroVoter__button--up']}>
        <i className="fas fa-thumbs-up"></i>
      </div>
      <div className={styles['HeroVoter__button--down']}>
        <i className="fas fa-thumbs-down"></i>
      </div>
    </div>
  )
}
