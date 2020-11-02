import { ReactElement } from 'react'
import { buildButtonClassName } from './Button.helpers'
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
