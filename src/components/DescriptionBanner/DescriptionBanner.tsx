import { ReactElement } from 'react'
import styles from './DescriptionBanner.module.scss'

export default function DescriptionBanner(): ReactElement {
  return (
    <div className={styles.DescriptionBanner}>
      <div className={styles.DescriptionBanner__title}>
        <h5>Speak out. Be heard.</h5>
        <h4>Be counted</h4>
      </div>
      <p className={styles.DescriptionBanner__description}>
        Rule of Thumb is a crowd sourced court of public opinion where anyone
        and everyone can speak out and speak freely. It’s easy: You share your
        opinion, we analyze and put the data in a public report.
      </p>
      <div className={styles.DescriptionBanner__close}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  )
}
