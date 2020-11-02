/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import db from '@database'

const getAllFeedData = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const allEntries = await db.getAll()
  const length = allEntries.length

  response.status(200).json({ length, data: allEntries })
}

export default getAllFeedData
