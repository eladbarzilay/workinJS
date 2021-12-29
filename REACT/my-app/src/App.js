import Hello from './components/Hello';
import Together from './components/Together';
import './App.css';

function App() {
  return (
    <div className="App">
      hello world
    <Hello name="david" lastName="cohen"/>
    <Together />
        {/* <img src="https://static.dw.com/image/45665028_303.jpg" className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
