import { ReactElement, useState, useEffect } from 'react'
import { serializeFeedData, renderFeedData } from './Feed.helpers'
import { IFeedData, IFeedResponse } from './Feed.types'

export default function Feed(): ReactElement {
  const [feedData, setFeedData] = useState<IFeedData[]>([])

  useEffect(() => {
    fetch('/api/feed')
      .then(response => response.json())
      .then(({ data }: IFeedResponse) => setFeedData(data))
  })

  const feedDataSerialized = serializeFeedData(feedData)

  return <div>{renderFeedData(feedDataSerialized)}</div>
}
