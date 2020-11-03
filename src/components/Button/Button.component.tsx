// Dependencies
import { ReactElement } from 'react'
// Utilities
import { buildButtonClassName } from './Button.helpers'
// Types
import { IButton } from './Button.types'

export default function Button({
  variant = 'medium',
  color = 'dark',
  children,
  onClick
}: IButton): ReactElement {
  return (
    <button className={buildButtonClassName(variant, color)} onClick={onClick}>
      {children}
    </button>
  )
}
