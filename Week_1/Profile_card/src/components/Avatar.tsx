import '../styles/App.css'

interface AvatarProps {
  name: string,
  photo: any,
  profession: string
}

const Avatar: React.FC<AvatarProps> = ({name, photo, profession}) => {
  return (
    <main className="info">
      <img className="info--photo" src={photo} alt="Admas Terefe" />
      <h1 className="info--name">{name}</h1>
      <h2 className="info--position">{profession}</h2>
    </main>
  );
}

export default Avatar;
