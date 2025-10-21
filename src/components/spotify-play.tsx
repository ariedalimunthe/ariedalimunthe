import React from 'react';

interface SpotifyEmbedProps {
  playlistId: string;
  width?: string;
  height?: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ playlistId, width = "100%", height = "380" }) => {
  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}`;
  return (
    <iframe
      src={embedUrl}
      width={width}
      height={height}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading='lazy'
       style={{ borderRadius: '16px' }}
      ></iframe>
  );
};

export default SpotifyEmbed;