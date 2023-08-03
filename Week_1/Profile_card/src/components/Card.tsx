import React from 'react';
import Avatar from './Avatar';
import Info from './Info';
import { Person } from '../models/Person';


interface CardProps {
  user: Person;
}

const Card: React.FC<CardProps> = ({ user }) => {
  const { name, bio, website, avatarUrl } = user;

  return (
    <div className="card">
      <Avatar avatarUrl={avatarUrl} />
      <Info name={name} bio={bio} website={website} />
    </div>
  );
};

export default Card;
