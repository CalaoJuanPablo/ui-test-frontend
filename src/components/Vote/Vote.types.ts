import { TVote } from '../../common/types/vote.types'

export interface IVote {
  showVoter: boolean
  onVoteClick(vote: TVote): void
  onVoteAgainClick(): void
}
