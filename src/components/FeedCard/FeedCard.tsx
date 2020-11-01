import { ReactElement } from 'react'
import VotesBar from '../VotesBar/VotesBar'
import { IFeedCard } from './FeedCard.types'

export default function FeedCard({
  id,
  name,
  image,
  category,
  description,
  votesDistribution
}: IFeedCard): ReactElement {
  return (
    <article id={id} style={{ backgroundImage: `url(${image.src})` }}>
      <h1>{name}</h1>
      <span>1 month ago in {category}</span>
      <p>{description}</p>
      <VotesBar up={votesDistribution.up} down={votesDistribution.down} />
    </article>
  )
}
