import { ReactElement, useState } from 'react'
import VotesBar from '../VotesBar/VotesBar'
import ThumbsButton from '../ThumbsButton/ThumbsButton'
import Vote from '../Vote/Vote'
import { IFeedCard } from './FeedCard.types'
import { TVote } from '../Vote/Vote.types'
import styles from './FeedCard.module.scss'

export default function FeedCard({
  id,
  name,
  image,
  category,
  description,
  votesDistribution
}: IFeedCard): ReactElement {
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  const handleVoteClick = (id: string) => (vote: TVote) => {
    console.log('ID:', id)
    console.log('VOTE:', vote)

    setHasVoted(true)
  }

  const handleVoteAgainClick = (): void => {
    setHasVoted(false)
  }

  return (
    <article
      className={styles.FeedCard}
      id={id}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className={styles.FeedCard__content}>
        <div className={styles['FeedCard__content--title']}>
          {votesDistribution.up + votesDistribution.down === 100 && (
            <div className={styles['FeedCard__content--title__block']}>
              <ThumbsButton
                variant={
                  votesDistribution.up > votesDistribution.down ? 'up' : 'down'
                }
              />
            </div>
          )}
          <h1>{name}</h1>
        </div>
        <span className={styles['FeedCard__content--category']}>
          <b>1 month ago in</b> {category}
        </span>
        <p className={styles['FeedCard__content--description']}>
          {description}
        </p>
        <Vote
          showVoter={!hasVoted}
          onVoteClick={handleVoteClick(id)}
          onVoteAgainClick={handleVoteAgainClick}
        />
        <VotesBar up={votesDistribution.up} down={votesDistribution.down} />
      </div>
    </article>
  )
}
