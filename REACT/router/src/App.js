
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header"
import MyName from "./components/MyName"

function App() {
  return (
    <div className="App">
      <Header/>
      <h2>App</h2>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/my-name/:name" element={<MyName/>}/>
        </Routes>
    </div>
  );
}

export default App;
