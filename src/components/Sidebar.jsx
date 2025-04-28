import { Link, useLocation } from "react-router-dom";
import {
  Home2,
  Discover,
  TrendUp,
  Microphone,
  Save2,
  Heart,
  Setting4,
  ProfileCircle
} from "iconsax-reactjs";

import React from "react";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/", icon: <Home2 /> },
    { name: "Explore", path: "/explore", icon: <Discover /> },
    { name: "Trending", path: "/trending", icon: <TrendUp /> },
    { name: "Podcasts", path: "/podcasts", icon: <Microphone /> },
    { name: "Bookmarks", path: "/bookmarks", icon: <Save2 /> },
  ];

  return (
    <>
      
      <div className="w-48 bg-myBlue  text-white p-4 flex flex-col space-y-2 relative ml-5 mr-5 mt-3 mb-3 rounded-2xl font-faculty ">
        <h1 className="font-semibold text-2xl text-desertSand text-center mb-5 mt-3">SounDrift</h1>
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 relative z-10 ${
                isActive
                  ? "text-desertSand  font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-desertSand"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3 text-zinc-400   rounded-lg transition-all duration-300">
          <span className="text-lg hover:text-desertSand cursor-pointer"><ProfileCircle /></span>
          <span>Akhil</span>
          <span className="hover:text-desertSand">
            <Setting4 className="absolute right-5 bottom-4 cursor-pointer" size="24"  />
          </span>
        </div>

      </div>
    </>
  );
};

export default Sidebar;
