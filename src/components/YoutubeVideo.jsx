

  import React, { useState } from 'react';
  import VideoSearch from './VideoSearch';
  import VideoPlayer from './VideoPlayer';
  function YouTubeVideo(){

    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoSelect = (video) => {
      setSelectedVideo(video);
    };

    return (
      <>
        <h1>YouTube Video Search & Player</h1>
        <VideoSearch onVideoSelect={handleVideoSelect} />
        <VideoPlayer video={selectedVideo} />
      </>
    );
  }
//

//  Obtain a YouTube Data API key by creating a project on the Google Developers Console and enabling the YouTube Data API v3.
//
//  Replace 'YOUR_YOUTUBE_API_KEY' in the VideoSearch.js component with your actual YouTube Data API key.
//
//  Now, you should have a simple React app where users can search for YouTube videos, and the selected video will be displayed and played in an iframe. Remember to handle edge cases, errors, and any additional features you may want to add to enhance the functionality of the app.
//
//
//



export default YouTubeVideo;