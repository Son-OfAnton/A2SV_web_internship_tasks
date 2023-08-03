import '../styles/App.css'

interface InfoProps {
  about: string;
  interest: string;
}

const Info: React.FC<InfoProps> = ({about, interest}) => {
    return (
      <section className="bio">
        <span className="bio--about">
          <h2 className="bio--about__title">About</h2>
          <p className="bio--about__descr">{about}</p>
        </span>
  
        <span className="bio--intrests">
          <h2 className="bio--intrests__title">Intrests</h2>
          <p className="bio--intrests__descr">{interest}</p>
        </span>
      </section>
    );
  }
  

export default Info;