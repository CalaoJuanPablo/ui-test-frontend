import { ReactElement } from 'react'
import Container from '../Container/Container'
import Section from '../Section/Section'
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
            {/* <Button /> */}
          </div>
        </div>
      </Container>
    </Section>
  )
}