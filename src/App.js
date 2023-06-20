import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import Nav from './nav/Nav';
import SignIn from './user/SignIn'
import SignUp from './user/SignUp'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
