
import './App.css';
//import Login from './pages/Login';
import Register from "./pages/Register"
//import Header from './components/Header';
import User from './pages/User';
import Login from './pages/Login';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <div c></div>
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </BrowserRouter>
    </div>
    // <div className="App">
    //   <Register/>
    //   <Login/>
    //   {/* <User/> */}
    // </div>
  );
}

export default App;
