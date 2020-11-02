import { TVariant, TColor } from './Button.types'
import styles from './Button.module.scss'

export const buildButtonClassName = (
  variant: TVariant,
  color: TColor
): string =>
  `${styles.Button} ${styles[`Button--${variant}`]} ${
    styles[`Button--${color}`]
  }`
