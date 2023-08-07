import React, { useState } from 'react';
import axios from 'axios';

const VideoSearch = ({ onVideoSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            q: searchTerm,
            part: 'snippet',
            maxResults: 5, // Number of search results to display
            key: process.env.YOUTUBE_API_KEY // Replace with your YouTube Data API key
          },
        }
      );

      setVideos(response.data.items);
    } catch (error) {
      console.error('Error searching videos:', error);
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {videos.map((video) => (
        <div key={video.id.videoId} onClick={() => onVideoSelect(video)}>
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <p>{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoSearch;