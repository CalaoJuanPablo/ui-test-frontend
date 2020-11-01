import { ReactElement } from 'react'
import Button from '../Button/Button'
import { IVote } from './Vote.types'
import styles from './Vote.module.scss'
import ThumbsButton from '../ThumbsButton/ThumbsButton'

export default function Vote({
  showVoter,
  onVoteClick,
  onVoteAgainClick
}: IVote): ReactElement {
  if (showVoter) {
    return (
      <div className={styles['Vote--voter']}>
        <ThumbsButton variant="up" />
        <ThumbsButton variant="down" />
        <Button color="light" onClick={() => onVoteClick('up')}>
          Vote now
        </Button>
      </div>
    )
  }
  return (
    <div className={styles['Vote--vote_again']}>
      <Button color="light" onClick={onVoteAgainClick}>
        Vote again
      </Button>
    </div>
  )
}
