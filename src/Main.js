import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn'
// my rouing that deal with all my routes and links in the page
const Main = () => (
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Home' element={<Home/>}></Route>
      <Route exact path='/SignUp' element={<SignUp/>}></Route>
      <Route exact path='/LogIn' element={<LogIn/>}></Route>
    </Routes>
  );

  export default Main