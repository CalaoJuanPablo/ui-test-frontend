export interface IPersonality {
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

export interface IPersonalitiesState {
  entities: { [id: string]: IPersonality }
  ids: Array<string>
}
