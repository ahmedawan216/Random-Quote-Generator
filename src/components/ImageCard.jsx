// components/ImageCard.jsx
import React from 'react';

const ImageCard = ({ image }) => {
  return (
 <div className="group relative overflow-hidden rounded-2xl bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <img 
        src={image.urls.regular} 
        alt={image.alt_description} 
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay - visible on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white font-medium truncate w-32">{image.user.name}</p>
            <p className="text-gray-300 text-xs">@{image.user.username}</p>
          </div>
          <a 
            href={image.links.download} 
            target="_blank" 
            rel="noreferrer"
            className="bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
