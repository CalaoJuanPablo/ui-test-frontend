// Dependencies
import { ReactElement } from 'react'
// Types
import { IContainer } from './Container.types'
// Styles
import styles from './Container.module.scss'

export default function Container({ children }: IContainer): ReactElement {
  return <div className={styles.Container}>{children}</div>
}
