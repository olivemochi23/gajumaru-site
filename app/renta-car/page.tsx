import Footer from '@/app/renta-car/components/Footer'
import MainCar from '@/app/renta-car/components/mainCar'
import Guide from '@/app/renta-car/components/guide'
import MoreInfo from '@/app/renta-car/components/more-info'
import FloatingReservationButton from '@/app/renta-car/components/FloatingReservationButton'
import Header from '@/app/renta-car/components/Header'
import Hero from '@/app/renta-car/components/Hero'
import Access from '@/app/renta-car/components/Access'

const Home = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
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

        <section id="access" className="w-screen px-0 relative mb-8">
          <div className="relative z-10">
            <Access />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingReservationButton />
    </div>
  )
}

export default Home