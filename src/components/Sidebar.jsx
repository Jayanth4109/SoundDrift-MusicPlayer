import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCompass, FaFire, FaPodcast, FaBookmark } from "react-icons/fa";

import React from 'react'

const Sidebar = () => {
    const location = useLocation();

    const menu = [
      { name: "Home", path: "/", icon: <FaHome /> },
      { name: "Explore", path: "/explore", icon: <FaCompass /> },
      { name: "Trending", path: "/trending", icon: <FaFire /> },
      { name: "Podcasts", path: "/podcasts", icon: <FaPodcast /> },
      { name: "Bookmarks", path: "/bookmarks", icon: <FaBookmark /> },
    ];
  
    return (
      <div className="w-45 bg-myBlue  text-white p-4 flex flex-col space-y-2 relative ml-3 mt-3 mb-3 rounded-2xl " >
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 relative z-10 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    );
}

export default Sidebar
