import { ReactElement, useState } from 'react'
import Button from '../Button/Button'
import { IVote, TVote } from './Vote.types'
import styles from './Vote.module.scss'
import ThumbsButton from '../ThumbsButton/ThumbsButton'

export default function Vote({
  showVoter,
  onVoteClick,
  onVoteAgainClick
}: IVote): ReactElement {
  if (showVoter) {
    const [thumbSelected, setThumbSelected] = useState<TVote>(null)

    return (
      <div className={styles['Vote--voter']}>
        <ThumbsButton
          variant="up"
          selected={thumbSelected === 'up'}
          onClick={() => setThumbSelected('up')}
        />
        <ThumbsButton
          variant="down"
          selected={thumbSelected === 'down'}
          onClick={() => setThumbSelected('down')}
        />
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
