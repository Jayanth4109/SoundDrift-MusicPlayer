import React, { useEffect, useState } from "react";
import { Play, Pause, ArrowLeft2, ArrowRight2, Heart, More } from "iconsax-reactjs";
import demoImage from '../assets/demo.png';
import { useMusicPlayer } from "../context/MusicPlayerContext";

const MusicPlayer = () => {
  const { currentSong, isPlaying, togglePlay, audioRef, setIsPlaying } = useMusicPlayer();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Update currentTime as the song plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, [audioRef, currentSong]);

  // Seek when slider is changed
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = Number(e.target.value);
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong, audioRef]);

  if (!currentSong) {
    return (
      <div className="flex items-center h-full px-4 text-lightBack">
        Select a song to play
      </div>
    );
  }

  // Format time helper
  const formatTime = (sec) => {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="flex items-center h-full w-full">
      {/* Song Info */}
      <div className="flex items-center gap-3 w-64">
        <img src={currentSong.image || demoImage} alt={currentSong.songName} className="w-14 h-14 object-cover rounded-xl " />
        <div>
          <div className="text-lightBack font-semibold truncate max-w-[200px]">{currentSong.songName}</div>
          <div className="text-xs text-zinc-300 truncate max-w-[150px]">{currentSong.artistName}</div>
        </div>
      </div>
      {/* Progress Slider */}
      <div className="flex flex-col items-center flex-1 mx-8 ">
        <div className="flex items-center w-full gap-2">
          <span className="text-xs text-lightBack/50 w-10 text-right">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full accent-desertSand rounded-2xl h-1.5"
          />
          <span className="text-xs text-lightBack/50 w-10">{formatTime(duration)}</span>
        </div>
        {/* Controls */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-desertSand/30">
            <ArrowLeft2 size="24" className="text-lightBack" />
          </button>
          <button className="p-2 rounded-full hover:bg-desertSand/30" onClick={togglePlay}>
            {isPlaying ? (
              <Pause size="28" className="text-desertSand" />
            ) : (
              <Play size="28" className="text-desertSand" />
            )}
          </button>
          <button className="p-2 rounded-full hover:bg-desertSand/30">
            <ArrowRight2 size="24" className="text-lightBack" />
          </button>
        </div>
      </div>
      {/* Bookmark & More */}
      <div className="flex items-center gap-4 ml-auto ">
        <button className="p-2 rounded-full hover:bg-desertSand/30">
          <Heart size="22" className="text-pink-500" />
        </button>
        <button className="p-2 rounded-full hover:bg-desertSand/30">
          <More size="22" className="text-lightBack" />
        </button>
      </div>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={currentSong.audio || ""}
        onEnded={() => setIsPlaying(false)}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default MusicPlayer;