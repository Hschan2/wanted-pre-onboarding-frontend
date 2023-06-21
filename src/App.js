import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
