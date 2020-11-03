import { connectToDatabase } from './mongodb'
import { ObjectID } from 'mongodb'

export type TVoteRequest = 'up' | 'down'

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

  private buildUpdateObject(vote: TVoteRequest) {
    if (vote === 'up') {
      return {
        $inc: {
          'votes_distribution.up': 1
        }
      }
    }
    if (vote === 'down') {
      return {
        $inc: {
          'votes_distribution.down': 1
        }
      }
    }
    return {
      $inc: {
        'votes_distribution.up': 0,
        'votes_distribution.down': 0
      }
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

  async getById(personalityId: string): Promise<IFeedData> {
    const { db } = await connectToDatabase()

    const personality: IPersonality = await db
      .collection('personalities')
      .findOne({ _id: new ObjectID(personalityId) })

    if (!personality) throw new Error('Not Personality Found')

    const { _id: id, ...rest } = personality

    return {
      ...rest,
      id,
      votes_distribution: this.calculateVotesDistributionPercentages(
        personality.votes_distribution.up,
        personality.votes_distribution.down
      )
    }
  }

  async updateById(
    personalityId: string,
    vote: TVoteRequest
  ): Promise<IFeedData> {
    const { db } = await connectToDatabase()
    const query = { _id: new ObjectID(personalityId) }

    const update = this.buildUpdateObject(vote)
    const options = { returnOriginal: false }

    const updateResponse = await db
      .collection('personalities')
      .findOneAndUpdate(query, update, options)

    const { value: personality }: { value: IPersonality } = await updateResponse

    if (!personality) throw new Error('Not Personality Found')

    const { _id: id, ...rest } = personality

    const personalityResponse = {
      ...rest,
      id,
      votes_distribution: this.calculateVotesDistributionPercentages(
        personality.votes_distribution.up,
        personality.votes_distribution.down
      )
    }

    return personalityResponse
  }
}

const db = new Database()

export default db
