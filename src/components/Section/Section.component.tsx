// Dependencies
import { ReactElement } from 'react'
// Types
import { ISection } from './Section.types'
// Styles
import styles from './Section.module.scss'

export default function Section({ children }: ISection): ReactElement {
  return <section className={styles.Section}>{children}</section>
}
