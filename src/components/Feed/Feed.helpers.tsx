import { ReactElement } from 'react'
import FeedCard from '../FeedCard/FeedCard'
import { IFeedCard } from '../FeedCard/FeedCard.types'
import { IFeedData } from './Feed.types'

export function serializeFeedData(rawData: Array<IFeedData>): Array<IFeedCard> {
  return rawData.map(element => ({
    id: element.id,
    name: element.name,
    image: {
      src: element.image.src,
      alt: element.image.alt
    },
    category: element.category,
    description: element.description,
    votesDistribution: {
      up: element.votes_distribution.up,
      down: element.votes_distribution.down
    }
  }))
}

export function renderFeedData(data: Array<IFeedCard>): Array<ReactElement> {
  return data.map(element => <FeedCard key={element.id} {...element} />)
}
