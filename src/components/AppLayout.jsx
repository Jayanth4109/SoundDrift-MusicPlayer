import React from "react";
import Sidebar from "./Sidebar";
import MusicPlayer from "./MusicPlayer";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-lightBack text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* Top Content Area */}
        <div className="flex-grow h-[85%] overflow-y-auto pr-2 shadow-xl no-scrollbar rounded-2xl bg-black/20">
          {children}
        </div>

        {/* Bottom Music Player */}
        <div className="h-[10%] bg-myBlue/50 backdrop-blur-3xl rounded-xl  p-4 mt-2">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
