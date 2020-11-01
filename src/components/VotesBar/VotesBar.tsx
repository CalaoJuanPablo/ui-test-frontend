import { ReactElement } from 'react'
import { IVotes } from './VotesBar.types'

export default function VotesBar({ up, down }: IVotes): ReactElement {
  if (up + down === 100) {
    return (
      <div>
        <div>{up}%</div>
        <div>{down}%</div>
      </div>
    )
  }

  return null
}
