import React from "react";
import MusicCardHorizontal from "./MusicCardHorizontal";
import songsData from "../data/songs.json";

const MusicSectionHorizontal = ({ title = "Popular Songs", limit = 3, start = 5 }) => {
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
    <div className="w-full p-4 ">
      <h2 className="text-2xl font-semibold text-myBlue mb-4 font-faculty">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {songsToRender.map((song) => (
          <MusicCardHorizontal
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

export default MusicSectionHorizontal;


