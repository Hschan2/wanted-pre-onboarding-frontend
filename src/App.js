import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './nav/Nav';
import Signin from './user/Signin'
import Signup from './user/Signup'

const Main = styled.main`
`;

function App() {
  return (
    <Main>
      <Nav/>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Main>
  );
}

export default App;
