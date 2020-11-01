import { ReactElement } from 'react'
import VotesBar from '../VotesBar/VotesBar'
import ThumbsIndicator from '../ThumbsIndicator/ThumbsIndicator'
import { IFeedCard } from './FeedCard.types'
import styles from './FeedCard.module.scss'

export default function FeedCard({
  id,
  name,
  image,
  category,
  description,
  votesDistribution
}: IFeedCard): ReactElement {
  return (
    <article
      className={styles.FeedCard}
      id={id}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className={styles.FeedCard__content}>
        <div className={styles['FeedCard__content--title']}>
          {votesDistribution.up + votesDistribution.down === 100 && (
            <ThumbsIndicator
              variant={
                votesDistribution.up > votesDistribution.down ? 'up' : 'down'
              }
            />
          )}
          <h1>{name}</h1>
        </div>
        <span className={styles['FeedCard__content--category']}>
          <b>1 month ago in</b> {category}
        </span>
        <p className={styles['FeedCard__content--description']}>
          {description}
        </p>
        {/* <Vote /> */}
        <VotesBar up={votesDistribution.up} down={votesDistribution.down} />
      </div>
    </article>
  )
}
