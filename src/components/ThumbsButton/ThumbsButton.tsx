import { ReactElement } from 'react'
import { buildThumbsButtonClassName } from './ThumbsButton.helpers'
import { IThumbsButton } from './ThumbsButton.types'

export default function ThumbsButton({
  variant = 'up',
  selected = false,
  readOnly = false
}: IThumbsButton): ReactElement {
  return (
    <div className={buildThumbsButtonClassName(variant, selected, readOnly)}>
      <i className={`fas fa-thumbs-${variant}`}></i>
    </div>
  )
}
