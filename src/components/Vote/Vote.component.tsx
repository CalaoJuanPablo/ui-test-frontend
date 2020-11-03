// Dependencies
import { ReactElement, useState } from 'react'
// Components
import Button from '../Button/Button.component'
import ThumbsButton from '../ThumbsButton/ThumbsButton.component'
// Common Types
import { TVote } from '../../common/types/vote.types'
// Types
import { IVote } from './Vote.types'
// Styles
import styles from './Vote.module.scss'

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
        <Button color="light" onClick={() => onVoteClick(thumbSelected)}>
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
