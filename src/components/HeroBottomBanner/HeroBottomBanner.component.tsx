import { ReactElement } from 'react'
import styles from './HeroBottomBanner.module.scss'

export default function HeroBottomBanner(): ReactElement {
  return (
    <div className={styles.HeroBottomBanner}>
      <div className={styles.HeroBottomBanner__closing}>
        <p>Closing in</p>
      </div>
      <div className={styles.HeroBottomBanner__days}>
        <p>
          <span>22&nbsp;</span>days
        </p>
      </div>
    </div>
  )
}
