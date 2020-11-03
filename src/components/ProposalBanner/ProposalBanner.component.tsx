// Dependencies
import { ReactElement } from 'react'
// Components
import Container from '../Container/Container.component'
import Section from '../Section/Section.component'
import Button from '../Button/Button.component'
// Styles
import styles from './ProposalBanner.module.scss'

export default function ProposalBanner(): ReactElement {
  return (
    <Section>
      <Container>
        <div className={styles.ProposalBanner}>
          <div className={styles.ProposalBanner__overlay}>
            <p className={styles.ProposalBanner__text}>
              Is there anyone else you would want us to add?
            </p>
            <Button variant="large">Submit a Name</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
