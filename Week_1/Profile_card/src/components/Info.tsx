import React from 'react';

interface InfoProps {
  name: string;
  bio: string;
  website?: string;
}

const Info: React.FC<InfoProps> = ({ name, bio, website }) => {
  return (
    <div className="info">
      <h2 className="info-name">{name}</h2>
      <p className="info-bio">{bio}</p>
      {website && (
        <a href={website} className="info-website" target="_blank" rel="noopener noreferrer">
          Website
        </a>
      )}
    </div>
  );
};

export default Info;
