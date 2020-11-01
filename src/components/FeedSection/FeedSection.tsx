import { ReactElement } from 'react'
import Container from '../Container/Container'
import Section from '../Section/Section'
import Feed from '../Feed/Feed'
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
