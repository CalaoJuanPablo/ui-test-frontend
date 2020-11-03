// Dependencies
import { ReactElement } from 'react'
// Types
import { IVotes } from './VotesBar.types'
// Styles
import styles from './VotesBar.module.scss'

export default function VotesBar({ up, down }: IVotes): ReactElement {
  if (up + down === 100) {
    return (
      <div className={styles.VotesBar}>
        <div
          className={styles['VotesBar__bar--up']}
          style={{ width: `${up}%` }}
        >
          <i className="fas fa-thumbs-up"></i>
          <span>{up}%</span>
        </div>
        <div
          className={styles['VotesBar__bar--down']}
          style={{ width: `${down}%` }}
        >
          <span>{down}%</span>
          <i className="fas fa-thumbs-down"></i>
        </div>
      </div>
    )
  }

  return null
}
