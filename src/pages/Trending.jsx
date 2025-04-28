import { Music } from "iconsax-reactjs";
import React from "react";
import MusicSectionHorizontal from "../components/MusicSectionHorizontal";
import MusicSection from "../components/MusicSection";

const Trending = () => {
  return (
    <>
      <h1 className="text-3xl px-6 py-3 font-bold text-myBlue mt-3 font-faculty">
        Trending
      </h1>
      <MusicSectionHorizontal title="Current Hits" limit={4} />
      <MusicSection title="All Time Hits" limit={5} />
      <MusicSectionHorizontal title="Discover More" limit={8} />
    </>
  );
};

export default Trending;
