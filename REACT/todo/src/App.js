
import './App.css';
import Clock from './components/Clock';
import Title from './components/Title';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <Title/>
      <ToDo/>
      <Clock/>
    </div>
  );
}

export default App;
