// Dependencies
import { ObjectID } from 'mongodb'
// Utilities
import { connectToDatabase } from './mongodb'
// Types
import {
  IVotesDistribution,
  TVote,
  IPersonalityInDB,
  IPersonality
} from './db.types'

class Database {
  private calculateVotesDistributionPercentages(
    votesUp: number,
    votesDown: number
  ): IVotesDistribution {
    if (votesUp === 0 && votesDown === 0) {
      return {
        up: 0,
        down: 0
      }
    }

    const total = votesUp + votesDown
    const upPercentage = Math.round((votesUp / total) * 100)
    const downPercentage = 100 - upPercentage

    return {
      up: upPercentage,
      down: downPercentage
    }
  }

  private buildUpdateObject(vote: TVote) {
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

  async getAll(): Promise<IPersonality[]> {
    const { db } = await connectToDatabase()

    const personalities: IPersonalityInDB[] = await db
      .collection('personalities')
      .find({})
      .toArray()

    const personalitiesReturn: IPersonality[] = personalities.map(
      personality => {
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
    )

    return personalitiesReturn
  }

  async getById(personalityId: string): Promise<IPersonality> {
    const { db } = await connectToDatabase()

    const personality: IPersonalityInDB = await db
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

  async updateById(personalityId: string, vote: TVote): Promise<IPersonality> {
    const { db } = await connectToDatabase()

    const query = { _id: new ObjectID(personalityId) }
    const update = this.buildUpdateObject(vote)
    const options = { returnOriginal: false }

    const updateResponse = await db
      .collection('personalities')
      .findOneAndUpdate(query, update, options)

    const {
      value: personality
    }: { value: IPersonalityInDB } = await updateResponse

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
