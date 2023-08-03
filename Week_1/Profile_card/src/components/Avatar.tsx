import React from 'react';

interface AvatarProps {
  avatarUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl }) => {
  return <img src={'./' + avatarUrl} alt="User Avatar" className="avatar" />;
};

export default Avatar;
