import './App.css';
import Card from './components/Card';
import people from './people';

function App() {
  return (
    <div className="App">
      {people.map((person, index) => (
        <Card key={index} user={person} />
      ))}
    </div>
  );
}

export default App;
