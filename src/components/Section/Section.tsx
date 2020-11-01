import { ReactElement, ReactNode } from 'react'
import styles from './Section.module.scss'

interface ISection {
  children: ReactNode
}

export default function Section({ children }: ISection): ReactElement {
  return <section className={styles.Section}>{children}</section>
}
