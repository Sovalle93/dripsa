import HeroSection from './components/home/HeroSection'
import BodySection from './components/home/BodySection'
import AchievementsSection from './components/home/AchievementsSection'
import PillarsSection from './components/home/PillarsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BodySection />
      <AchievementsSection />
      <PillarsSection />
    </main>
  )
}