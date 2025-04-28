import React from "react";
import MusicSection from "../components/MusicSection";
import MusicSectionHorizontal from "../components/MusicSectionHorizontal";

const Explore = () => {
  return (
    <>
      <h1 className='text-3xl px-6 py-3 font-bold text-myBlue font-faculty'>Explore</h1>
      <MusicSection title="Fresh Finds" start={23}limit={5} />
      <MusicSectionHorizontal title="Hidden Gems" limit={4} />
      <MusicSection title="Beyond Beats" limit={5} />
    </>
  );
};

export default Explore;
