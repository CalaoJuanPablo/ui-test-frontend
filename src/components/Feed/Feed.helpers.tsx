import { ReactElement } from 'react'
import FeedCard from '../FeedCard/FeedCard.component'

export function renderFeedData(ids: Array<string>): Array<ReactElement> {
  return ids.map(id => <FeedCard key={id} id={id} />)
}
