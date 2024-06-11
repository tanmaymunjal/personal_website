'use client'; // Ensure the component runs in the client-side

import React, { useRef, useEffect } from 'react';
import styles from './LoadingVideo.module.css';

const LoadingVideo = ({ onVideoLoaded }) => {
  const videoRef = useRef(null);


  useEffect(() => {

    const handleLoadedMetadata = () => {
      onVideoLoaded(videoElement.duration);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    // checks to see if browser rushed to fast to listen to load metadata evnt
    if (videoElement.readyState >= 2) {
      handleLoadedMetadata();
    }

    return () => {
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [onVideoLoaded]);

  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} autoPlay muted className={styles.video}>
        <source src="./terminal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingVideo;
