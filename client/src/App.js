import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import MyTraining from "./components/MyTraining/MyTraining";
import NavBar from "./components/NavBar/NavBar";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard"
import { UserContextProvider } from "./contexts/UserContext";

function App() {

  return (
    <UserContextProvider>
      <div className="App">
          <NavBar/>
          <div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/mytrainings" element={<MyTraining/>}/>
              <Route path="/admindashboard" element={<AdminDashboard/>}/>
            </Routes>
          </div>
      </div>
    </UserContextProvider>
  );
}

export default App;