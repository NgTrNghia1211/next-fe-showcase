import Image from 'next/image'
import { Hero, SearchBar, CustomFilter, CarCard } from '@/components' 
import { fetchCar } from '@/utils'

export default async function Home() {
  const allCars = await fetchCar();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'> Car Catalog </h1>
          <p> Explore the Cars you might like !</p>
        </div>

        <div className="home_filters">
          <SearchBar />
          <div className="home_filter-container">
            <CustomFilter 
              title="fuel"
            />
            <CustomFilter 
              title="year"
            />
          </div>
        </div>

        {!isDataEmpty ? (
          <section > 
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (<CarCard car={car} key={car}/>))}
            </div>
          </section>
        ) : (
          <div className='home__error-container' > 
            <h2 className='text-black text-xl font-bold'> Oops, No results </h2>
          </div >
        ) }
      </div>
    </main>
  )
}
