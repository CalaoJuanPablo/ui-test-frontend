import { TVariant } from './ThumbsButton.types'
import styles from './ThumbsButton.module.scss'

export const buildThumbsButtonClassName = (
  variant: TVariant,
  selected: boolean,
  readOnly: boolean
): string => {
  const baseClassName = `${styles[`ThumbsButton--${variant}`]}`

  if (readOnly) return `${baseClassName} ${styles[`ThumbsButton--read_only`]}`
  if (selected) {
    return `${baseClassName} ${styles[`ThumbsButton--selected`]}`
  }
  return `${baseClassName}`
}
