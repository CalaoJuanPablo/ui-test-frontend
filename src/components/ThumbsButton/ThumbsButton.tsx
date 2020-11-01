import { ReactElement } from 'react'
import { IThumbsButton } from './ThumbsButton.types'
import styles from './ThumbsButton.module.scss'

export default function ThumbsButton({
  variant = 'up'
}: IThumbsButton): ReactElement {
  return (
    <div className={styles[`ThumbsButton--${variant}`]}>
      <i className={`fas fa-thumbs-${variant}`}></i>
    </div>
  )
}
