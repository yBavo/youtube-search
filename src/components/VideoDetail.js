import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const { title, description } = video.snippet;
  const src = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={src} />
      </div>
      <div className="ui segment">
        {title}
        {description}
      </div>
    </div>
  );
};

export default VideoDetail;
