import { Music } from "iconsax-reactjs";
import React from "react";
import MusicSectionHorizontal from "../components/MusicSectionHorizontal";
import MusicSection from "../components/MusicSection";


const Bookmarks = () => {
  return (
    <>
      <h1 className="text-3xl px-6 py-3 font-bold text-myBlue font-faculty">BookMarks</h1>
      <MusicSection title="Your Favourites" start={30} limit={5} />
      <MusicSectionHorizontal title="Saved Songs" start={36} limit={8} />
    </>
  );
};

export default Bookmarks;
