import { Hero } from '@/components/marketing/Hero'
import { StatsBar } from '@/components/marketing/StatsBar'
import { FoundationPolicies } from '@/components/marketing/FoundationPolicies'
import { UseCases } from '@/components/marketing/UseCases'
import { HowItWorks } from '@/components/marketing/HowItWorks'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FoundationPolicies />
      <HowItWorks />
      <UseCases />
    </>
  )
}
