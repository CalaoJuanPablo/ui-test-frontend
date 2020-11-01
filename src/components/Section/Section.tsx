import { ReactElement } from 'react'
import { ISection } from './Section.types'
import styles from './Section.module.scss'

export default function Section({ children }: ISection): ReactElement {
  return <section className={styles.Section}>{children}</section>
}
