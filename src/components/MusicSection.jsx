import React from "react";
import MusicCard from "./MusicCard";
import songsData from "../data/songs.json";

const MusicSection = ({ title = "Genre Title", limit = 7, start = 0 }) => {
  const songsToRender = songsData.items
    .filter(item => item.track && item.track.preview_url)
    .slice(start, start + limit)
    .map(item => ({
      id: item.track.id,
      image: item.track.album?.images?.[0]?.url || "/src/assets/demo.png",
      songName: item.track.name,
      artistName: item.track.artists?.map(a => a.name).join(", "),
      audio: item.track.preview_url,
    }));

  return (
    <div className="mb-0 py-3 px-6 ">
      <h2 className="text-2xl font-semibold text-myBlue mb-4 font-faculty ">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full max-w-6xl mx-auto">
        {songsToRender.map((song) => (
          <MusicCard
            key={song.id}
            image={song.image}
            songName={song.songName}
            artistName={song.artistName}
            audio={song.audio}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicSection;
