import { ReactElement } from 'react'
import { IContainer } from './Container.types'
import styles from './Container.module.scss'

export default function Container({ children }: IContainer): ReactElement {
  return <div className={styles.Container}>{children}</div>
}
