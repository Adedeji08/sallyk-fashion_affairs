/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 17/05/2022 - 08:50:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/05/2022
    * - Author          : 
    * - Modification    : 
**/


import './App.css';
import Navbar from './components/Navbar';
import { SignUp } from './auth/SignUp';
import { SignIn } from './auth/SignIn';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Collections } from './components/Collections';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Routes>
            <Route path="/" element={<Collections />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
          </Routes>
          <Sidebar />
    </div>
  );
}

export default App;
