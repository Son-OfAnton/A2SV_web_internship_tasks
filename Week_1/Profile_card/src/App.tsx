import Card from './components/Card'
import { Person } from './models/Person'
import './styles/App.css'


const admas: Person = {
  name: "Admas Terefe",
  photo: "../assets/admas.jpg",
  profession: "Frontend Developer",
  about: `I am a frontend developer with a particular interest in making things 
          simple and automating daily tasks. I try to keep up with security and 
          best practices, and am always looking for new things to learn.`.trim(),
  interest: `Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
             Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.`.trim(),
  links: ["admas.terefe@a2sv.org", "https://www.linkedin.com/in/admas-girma/", "https://www.twitter.com", "https://github.com/Son-OfAnton"]
}


const App = () => {
  return (
    <div>
      <Card person={admas}/>
    </div>
  )
}

export default App