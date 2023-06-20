import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import Nav from './nav/Nav';
import Signin from './user/Signin'
import Signup from './user/Signup'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
