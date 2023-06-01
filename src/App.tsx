import './App.css';
import Stars from './components/Stars';

function App(): JSX.Element {
  const count = 4;
  if (count > 0 && count < 5 ) {
    return (
      <div>
        <Stars count={count}/>
      </div>
    );
  } else {return <></>};
};

export default App;
