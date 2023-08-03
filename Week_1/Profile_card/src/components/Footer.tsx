import '../styles/App.css'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import React from 'react';

interface FooterProps {
  links: string[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className="footer">
      {links.map((link, index) => (
        <a
          key={index}
          className="footer--links"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {index === 0 ? (
            <img className="footer--links__icon" src={MdEmail} alt="Email" />
          ) : index === 1 ? (
            <img className="footer--links__icon" src={BsLinkedin} alt="Linkedin" />
          ) : index === 2 ? (
            <img className="footer--links__icon" src={BsTwitter} alt="Twitter" />
          ) : (
            <img className="footer--links__icon" src={BsGithub} alt="Github" />
          )}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
