import { ReactElement } from 'react'
import { IThumbsIndicator } from './ThumbsIndicator.types'
import styles from './ThumbsIndicator.module.scss'

export default function ThumbsIndicator({
  variant
}: IThumbsIndicator): ReactElement {
  return variant === 'up' ? (
    <div className={styles['ThumbsIndicator--up']}>
      <i className="fas fa-thumbs-up"></i>
    </div>
  ) : (
    <div className={styles['ThumbsIndicator--down']}>
      <i className="fas fa-thumbs-down"></i>
    </div>
  )
}
