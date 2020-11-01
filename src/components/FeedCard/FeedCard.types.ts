import { IVotes } from '../VotesBar/VotesBar.types'
import { IImage } from '../../common/types/image.type'

export interface IFeedCard {
  id: string
  name: string
  image: IImage
  category: string
  description: string
  votesDistribution: IVotes
}
