import { ReactElement } from 'react'
import { IThumbsIndicator } from './ThumbsIndicator.types'
import styles from './ThumbsIndicator.module.scss'

export default function ThumbsIndicator({
  up,
  down
}: IThumbsIndicator): ReactElement {
  if (up + down !== 100) return null

  if (up > down)
    return (
      <div className={styles['ThumbsIndicator--up']}>
        <i className="fas fa-thumbs-up"></i>
      </div>
    )

  if (up <= down)
    return (
      <div className={styles['ThumbsIndicator--down']}>
        <i className="fas fa-thumbs-down"></i>
      </div>
    )

  return null
}
