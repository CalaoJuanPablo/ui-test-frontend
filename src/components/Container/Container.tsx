import { ReactElement, ReactNode } from 'react'
import styles from './Container.module.scss'

interface IContainer {
  children: ReactNode
}
export default function Container({ children }: IContainer): ReactElement {
  return <div className={styles.Container}>{children}</div>
}
