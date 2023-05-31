import './App.css';
import Stars from './components/Stars';

function App(): JSX.Element {
  type StarCount = 1 | 2 | 3 | 4 | 5;
  const count: StarCount = 3;
  if (typeof count === 'StarCount') {
    return (
      <div>
        <Stars count={count}/>
      </div>
    );
  };
}

export default App;
