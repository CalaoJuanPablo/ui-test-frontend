import { IPersonalitiesResponse, IPersonalityData } from './personalities.types'

async function getAllPersonalities(): Promise<IPersonalityData[]> {
  const response = await fetch('/api/feed')
  const responseData: IPersonalitiesResponse = await response.json()

  if ('data' in responseData) {
    return responseData.data
  }

  return Promise.reject('Error fetching data')
}

async function getPersonalityById(id: string): Promise<IPersonalityData> {
  const response = await fetch(`/api/feed/${id}`)
  const responseData = await response.json()

  if ('id' in responseData) {
    return responseData
  }

  return Promise.reject('Error fetching data')
}

async function updatePersonalityById(
  id: string,
  vote: 'up' | 'down'
): Promise<IPersonalityData> {
  const response = await fetch(`/api/feed/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ vote })
  })

  const responseData = await response.json()

  if ('id' in responseData) {
    return responseData
  }

  return Promise.reject('Error updating data')
}

export default {
  getAll: getAllPersonalities,
  getById: getPersonalityById,
  updateById: updatePersonalityById
}
