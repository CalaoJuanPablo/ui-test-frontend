// Dependencies
import { ReactElement } from 'react'
// Components
import Container from '../Container/Container.component'
import Section from '../Section/Section.component'
import Feed from '../Feed/Feed.component'
// Styles
import styles from './FeedSection.module.scss'

export default function FeedSection(): ReactElement {
  return (
    <Section>
      <Container>
        <h1 className={styles.FeedSection__title}>Previous Rulings</h1>
        <Feed />
      </Container>
    </Section>
  )
}
