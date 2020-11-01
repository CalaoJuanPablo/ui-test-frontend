export interface IFeedData {
  id: string
  name: string
  image: {
    src: string
    alt: string
  }
  category: string
  description: string
  votes_distribution: {
    up: number
    down: number
  }
}

export interface IFeedResponse {
  length: number
  data: Array<IFeedData>
}
