import AboutTopLeft from '../components/about/AboutTopLeft'
import AboutTopRight from '../components/about/AboutTopRight'
import AboutBottomLeft from '../components/about/AboutBottomLeft'
import AboutBottomRight from '../components/about/AboutBottomRight'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <AboutTopLeft />
        <AboutTopRight />
        <AboutBottomLeft />
        <AboutBottomRight />
      </div>
    </main>
  )
}