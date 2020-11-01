import { ReactElement } from 'react'
import { IButton, TColor, TVariant } from './Button.types'
import styles from './Button.module.scss'

export default function Button({
  variant = 'medium',
  color = 'dark',
  children,
  onClick
}: IButton): ReactElement {
  const buildButtonClassName = (variant: TVariant, color: TColor): string =>
    `${styles.Button} ${styles[`Button--${variant}`]} ${
      styles[`Button--${color}`]
    }`

  return (
    <button className={buildButtonClassName(variant, color)} onClick={onClick}>
      {children}
    </button>
  )
}
