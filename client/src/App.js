import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import MyTraining from "./components/MyTraining/MyTraining";
import NavBar from "./components/NavBar/NavBar";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){r.json().then((user)=>setUser(user))}
    })
  }, [])

  return (
    <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginPage onLogIn={setUser}/>}/>
            <Route path="/mytrainings" element={<MyTraining/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;