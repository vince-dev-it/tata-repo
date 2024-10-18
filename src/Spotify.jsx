import React from "react";

const SpotifyEmbed = ({ uri }) => {
  return (
    // <iframe
    //   src={`https://open.spotify.com/embed/${uri}`}
    //   width="300"
    //   height="380"
    //   frameBorder="0"
    //   allow="encrypted-media"
    //   title="Spotify Player"
    // ></iframe>

    <iframe
      style="border-radius:12px"
      src="{`https://open.spotify.com/embed/${uri}`}"
      width="100%"
      height="352"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;
