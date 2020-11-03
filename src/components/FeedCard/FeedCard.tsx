import { ReactElement, useState } from 'react'
import { useSelector } from 'react-redux'
import VotesBar from '../VotesBar/VotesBar'
import ThumbsButton from '../ThumbsButton/ThumbsButton'
import Vote from '../Vote/Vote'
import { IFeedCard } from './FeedCard.types'
import { TVote } from '../Vote/Vote.types'
import styles from './FeedCard.module.scss'
import { IGlobalState } from 'src/redux/store'
import { IPersonality } from 'src/redux/slices/personalities/personalities.types'

export default function FeedCard({ id }: IFeedCard): ReactElement {
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  const {
    name,
    image,
    category,
    description,
    votes_distribution
  } = useSelector(
    (state: IGlobalState): IPersonality => state.personalities.entities[id]
  )

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
          {votes_distribution.up + votes_distribution.down === 100 && (
            <div className={styles['FeedCard__content--title__block']}>
              <ThumbsButton
                variant={
                  votes_distribution.up > votes_distribution.down
                    ? 'up'
                    : 'down'
                }
                readOnly
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
        <VotesBar up={votes_distribution.up} down={votes_distribution.down} />
      </div>
    </article>
  )
}
