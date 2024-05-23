import React from 'react';

interface BlogProps {
    videoId: string,
    title: string,
    description: string
}

const YouTubeVideo = ({ videoId, title, description }: BlogProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative pb-9/16">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default YouTubeVideo;
