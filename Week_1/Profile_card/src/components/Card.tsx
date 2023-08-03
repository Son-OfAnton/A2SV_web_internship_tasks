import Footer from './Footer';
import Info from './Info';
import Avatar from './Avatar';
import { Person } from '../models/Person';
import '../styles/App.css'


interface CardProps {
  person: Person
}


const Card:React.FC<CardProps> = ({person}) => {
  const { name, photo, profession, about, interest, links } = person; 

  return (
    <div>
      <Avatar name={name} photo={photo} profession={profession}/>
			<Info about={about} interest={interest}/>
			<Footer links={links}/>
    </div>
  )
}

export default Card