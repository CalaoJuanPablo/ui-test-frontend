export type TVote = 'up' | 'down'

export interface IVotesDistribution {
  up: number
  down: number
}

export interface IPersonalityInDB {
  _id: string
  name: string
  image: {
    src: string
    alt: string
  }
  category: string
  description: string
  votes_distribution: IVotesDistribution
}

export interface IPersonality {
  id: string
  name: string
  image: {
    src: string
    alt: string
  }
  category: string
  description: string
  votes_distribution: IVotesDistribution
}
