export type TVote = 'up' | 'down'

export interface IVote {
  showVoter: boolean
  onVoteClick(vote: TVote): void
  onVoteAgainClick(): void
}
