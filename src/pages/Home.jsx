import React from 'react'
import MusicSection from '../components/MusicSection'
import MusicSectionHorizontal from '../components/MusicSectionHorizontal'

const Home = () => {
  return (
    <>
      <h1 className='text-3xl px-6 py-3 font-bold text-myBlue mt-3 font-faculty'>Hello, <span className='text-desertSand'>Akhil</span></h1>
      <MusicSectionHorizontal title="Recently Played" start={29} limit={8} />
      <MusicSection title="Suggested" start={5} limit={5} />
      <MusicSection title="Based on your mood" start={40} limit={5} />
    </>
  )
}

export default Home