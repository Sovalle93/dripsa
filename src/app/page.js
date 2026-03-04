import HeroSection from './components/home/HeroSection'
import BodySection from './components/home/BodySection'
import AchievementsSection from './components/home/AchievementsSection'
import Brands from './components/home/Brands'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BodySection />
      <AchievementsSection />
      <Brands />
    </main>
  )
}