import React from 'react'
import MusicSection from '../components/MusicSection'
import FeaturedEpisode from '../components/FeaturedEpisode'

const Podcasts = () => {
  return (
    <>
      <FeaturedEpisode />
      <MusicSection title="Top Podcasts" start={21} limit={5} />
    </>
  )
}

export default Podcasts