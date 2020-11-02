import allData from './data'

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

class Database {
  async getAll(): Promise<IFeedData[]> {
    const asArray = Object.values(allData)
    await randomDelay()
    return asArray
  }

  async getById(id: string): Promise<IFeedData | null> {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null
    }

    const entry = allData[id]
    await randomDelay()
    return entry
  }
}

const randomDelay = () =>
  new Promise(resolve => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })

export default Database
