/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import db from '@database'

type TVoteRequest = 'up' | 'down'

const getAllFeedData = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { id } = request.query
  if (request.method === 'PUT') {
    const { id } = request.query
    const { vote } = request.body

    if (!vote) {
      response.status(400).json({
        status: 400,
        message: 'Invalid request: You must send a vote'
      })

      return
    }

    const personality = await db.updateById(id as string, vote as TVoteRequest)

    response.status(200).json(personality)

    return
  }

  const personality = await db.getById(id as string)
  response.status(200).json(personality)
}

export default getAllFeedData
