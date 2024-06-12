"use client"; // Ensure the component runs in the client-side

import React, { useState, useEffect } from "react";
import LoadingVideo from "./components/LoadingVideo.js";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact.js";
import Projects from "./components/Projects.js";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [videoDuration, setVideoDuration] = useState(1000);

  useEffect(() => {
    if (videoDuration !== null) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, videoDuration * 1000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [videoDuration]);

  const handleVideoLoaded = (duration: number) => {
    setVideoDuration(duration);
  };

  const handleSkipAnimation = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          <LoadingVideo onVideoLoaded={handleVideoLoaded} />
          <button
            onClick={handleSkipAnimation}
            className="absolute bottom-10 right-8 text-white py-2 px-4 my-6 mx-6 rounded hover:bg-blue-700 transition duration-300 text-3xl"
          >
            Skip Animation
          </button>
        </div>
      ) : (
        <div>
          <Header />
          <Introduction />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <br></br>
          <br></br>
        </div>
      )}
    </>
  );
}
