import './App.css';
import Header from './componenets/header';
import Landing from './componenets/landing';
import SigninPage from './componenets/signinPage';
 import SignupPage from "./componenets/signupPage/index"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path="/" element={<SigninPage/>}/>
      <Route path="/signupPage" element={<SignupPage/>}/>
      <Route path="/landing" element={<Landing/>}/>
     </Routes>
    </div>
  );
}

export default App;
