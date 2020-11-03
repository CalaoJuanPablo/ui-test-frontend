export interface IPersonalityData {
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

export interface IPersonalitiesResponse {
  length: number
  data: Array<IPersonalityData>
}
