import { connectToDatabase } from '../utils/mongodb'

interface IVotes {
  up: number
  down: number
}

interface IPersonality {
  _id: string
  name: string
  image: {
    src: string
    alt: string
  }
  category: string
  description: string
  votes_distribution: IVotes
}

export interface IFeedData {
  id: string
  name: string
  image: {
    src: string
    alt: string
  }
  category: string
  description: string
  votes_distribution: IVotes
}

class Database {
  private calculateVotesDistributionPercentages(
    votesUp: number,
    votesDown: number
  ): IVotes {
    const total = votesUp + votesDown
    const upPercentage = Math.round((votesUp / total) * 100)
    const downPercentage = 100 - upPercentage

    return {
      up: upPercentage,
      down: downPercentage
    }
  }

  async getAll(): Promise<IFeedData[]> {
    const { db } = await connectToDatabase()

    const personalities: IPersonality[] = await db
      .collection('personalities')
      .find({})
      .toArray()

    const personalitiesReturn: IFeedData[] = personalities.map(personality => {
      const { _id: id, ...rest } = personality

      return {
        ...rest,
        id,
        votes_distribution: this.calculateVotesDistributionPercentages(
          personality.votes_distribution.up,
          personality.votes_distribution.down
        )
      }
    })

    return personalitiesReturn
  }
}

export default Database
