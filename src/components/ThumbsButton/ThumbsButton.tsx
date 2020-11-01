import { ReactElement } from 'react'
import { buildThumbsButtonClassName } from './ThumbsButton.helpers'
import { IThumbsButton } from './ThumbsButton.types'

export default function ThumbsButton({
  variant = 'up',
  selected = false,
  readOnly = false,
  onClick
}: IThumbsButton): ReactElement {
  const handleClick = () => {
    if (readOnly) {
      return
    }
    if (onClick && typeof onClick === 'function') {
      onClick()
      return
    }
  }

  return (
    <div
      className={buildThumbsButtonClassName(variant, selected, readOnly)}
      onClick={handleClick}
    >
      <i className={`fas fa-thumbs-${variant}`}></i>
    </div>
  )
}
