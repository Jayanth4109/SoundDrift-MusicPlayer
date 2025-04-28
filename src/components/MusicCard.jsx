import React from "react";
import { Play, Heart } from "iconsax-reactjs";
import demoImage from '../assets/demo.png';
import { useMusicPlayer } from "../context/MusicPlayerContext";

const MusicCard = ({ image = demoImage, songName= 'Hanuman Chalisa', artistName = 'Aks & Laxmi', audio }) => {
  const { playSong } = useMusicPlayer();

  const handlePlay = () => {
    playSong({ image, songName, artistName, audio });
  };
  return (
    <div className="w-48 rounded-2xl overflow-hidden bg-myBlue shadow-md group cursor-pointer transition-all duration-300 hover:shadow-xl flex flex-col">
      <div className="relative w-full h-48 bg-gray-200">
        <img
          src={image}
          alt={songName}
          className="w-full h-full object-cover object-center"
          style={{ aspectRatio: "1/1" }}
        />
        <div
          onClick={handlePlay}
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="bg-desertSand p-2 rounded-full">
            <Play size="20" variant="Linear" className="text-lightBack" />
          </div>
        </div>
      </div>
      <div className="p-4 bg-myBlue flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h4
            className="text-sm font-semibold text-lightBack truncate max-w-[160px]"
            title={songName}
          >
            {songName}
          </h4>
          <div className="flex items-center justify-between w-full">
            <p
              className="text-xs text-zinc-400 truncate max-w-[130px]"
              title={artistName}
            >
              {artistName}
            </p>
            <Heart size="16" className="text-pink-500 ml-2 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
