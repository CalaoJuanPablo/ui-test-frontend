import { ReactElement } from 'react'
import HomeLayout from '../src/layouts/home'
import Section from '../src/components/Section/Section'
import Container from '../src/components/Container/Container'
import DescriptionBanner from '../src/components/DescriptionBanner/DescriptionBanner'
import FeedSection from '../src/components/FeedSection/FeedSection'

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
      </main>
    </HomeLayout>
  )
}
