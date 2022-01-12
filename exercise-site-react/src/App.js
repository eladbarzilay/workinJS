import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Fotter from './Components/Fotter/Fotter'
import Admin from './Pages/Admin/Admin'
import Exercise from './Pages/Exercise/Exercise'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'


function App() {
  return (
    <div className="App">

        <header className="header">
          <Header/>
        </header>
        <main className="main">
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/exercise/:_id" element={<Exercise/>}/>
         <Route path="/admin" element={<Admin/>}/>
        {/* <Route path="/admin/exercise/:id" element={<AdminExercise/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        </Routes>
        </main>
        <footer className="footer">
          <Fotter/>
          </footer>

    </div>
  );
}

export default App;
