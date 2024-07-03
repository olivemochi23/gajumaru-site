import Footer from '@/renta-car/components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MainCar from '@/renta-car/components/mainCar'
import Guide from '@/renta-car/components/guide'
import MoreInfo from '@/renta-car/components/more-info'
import FloatingReservationButton from '@/renta-car/components/FloatingReservationButton'

const Home = () => {
  return (
    <div>
      <Header />
      <main className="relative bg-contact-background bg-center">
        <section id="hero" className="w-screen px-0 relative">
          <div className="relative z-10">
            <Hero />
          </div>
        </section>

        <section id="mainCar" className="w-screen px-0 relative my-8">
          <div className="relative z-10">
            <MainCar />
          </div>
        </section>

        <section id="guide" className="w-screen px-0 relative my-8">
          <div className="relative z-10">
            <Guide />
          </div>
        </section>

        <section id="moreInfo" className="w-screen px-0 relative mb-8">
          <div className="relative z-10">
            <MoreInfo />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingReservationButton />
    </div>
  )
}
export default Home