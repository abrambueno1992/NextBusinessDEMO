import Link from 'next/link'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Agencies from '../components/Agencies'
import Information from '../components/Information'

const Index = () => (
  <Layout>
      <Hero/>
      <Agencies/>
      <Information/>
  </Layout>
)

export default Index
