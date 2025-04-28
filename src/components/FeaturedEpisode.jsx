import React from "react";
import { Play, Bookmark, ArchiveAdd } from "iconsax-reactjs"; // assuming you are using iconsax-reactjs

const FeaturedEpisode = () => {
  return (
    <div className="p-6 bg-desertSand rounded-2xl shadow-md flex items-center gap-6 w-[98%] ml-3.5 mt-3">
      {/* Left Side - Image */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-lightBack font-semibold text-3xl font-faculty">
          Featured Episode
        </h2>
        <div className="flex w-52 h-52 rounded-2xl overflow-hidden bg-gray-100 ">
          <img
            src="src/assets/podcast.jpg"
            alt="Episode thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-between flex-1 ml-20">
        <div>
          <h3 className="text-2xl font-semibold text-myBlue font-faculty">
            Adhyay 6: The Yoga of Meditation
          </h3>
          <p className="text-lightBack mt-1 font-regular">Bhagavad Gita Podcast</p>
          <p className="text-gray-100 mt-3 text-sm">
          In this episode, we will explore the sixth chapter of the Gita, titled "Dhyana Yoga - The Yoga of Meditation". This chapter continues the conversation between Lord Krishna and Arjuna, as Lord Krishna explains the importance of meditation on the path of yoga. 
          </p>
        </div>

        {/* Bottom Buttons */}
        <div className="flex items-center gap-4 mt-4 ">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg  border border-myBlue bg-myBlue text-lightBack hover:scale-105 transition-all duration-300">
            <Play size="20" />
            Play Episode
          </button>
          <ArchiveAdd size="30" className="text-myBlue" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedEpisode;
