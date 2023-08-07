import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        frameBorder="0"
        allowFullScreen
        title="Video Player"
      ></iframe>
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoPlayer;
