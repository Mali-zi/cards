import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import BasicCard from './components/Card';

const Props1 = {
  title: 'Card Title',
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  buttonHref: '#',
  children: <Card.Img variant="top" src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg" />
};

const Props2 = {
  title: 'Special title treatment',
  text: "With supporting text below as a natural lead-in to additional content.",
  buttonHref: '#',
};

function App() {
  return (
    <div className="App">
      <div className='container'>
      <BasicCard
        {...Props1}
      >
        {Props1.children}
      </BasicCard>

      <BasicCard
        {...Props2}
      >
      </BasicCard>
      </div>
    </div>
  );
}

export default App;
