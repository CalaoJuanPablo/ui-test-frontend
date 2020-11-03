// Dependencies
import { ReactElement } from 'react'
// Layout
import HomeLayout from '../src/layouts/home.layout'
// Components
import Section from '../src/components/Section/Section.component'
import Container from '../src/components/Container/Container.component'
import DescriptionBanner from '../src/components/DescriptionBanner/DescriptionBanner.component'
import FeedSection from '../src/components/FeedSection/FeedSection.component'
import ProposalBanner from 'src/components/ProposalBanner/ProposalBanner.component'

export default function Home(): ReactElement {
  return (
    <HomeLayout>
      <main>
        <Section>
          <Container>
            <DescriptionBanner />
          </Container>
        </Section>
        <FeedSection />
        <ProposalBanner />
      </main>
    </HomeLayout>
  )
}
