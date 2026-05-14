import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { LandingPage } from '../pages/LandingPage'

export const LandingLayout = () => {
  return (
    <div className="min-h-screen bg-[rgb(10,10,10)] text-neutral-100">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  )
}
