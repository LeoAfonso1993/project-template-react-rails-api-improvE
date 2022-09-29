import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import AdminDashboard from "./components/admin/AdminDashboard/AdminDashboard"
import { UserContextProvider } from "./contexts/UserContext";
import NewTrainingForm from "./components/admin/NewTrainingFrom/NewTrainingForm";
import {TrainingContextProvider} from "./contexts/TrainingContext";
import MyTraining from "./components/employee/MyTraining/MyTraining";


function App() {

  return (
    <UserContextProvider>
      <TrainingContextProvider>
        <div className="App">
            <NavBar/>
            <div>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/mytrainings" element={<MyTraining/>}/>
                <Route path="/admindashboard" element={<AdminDashboard/>}/>
                <Route path="/newtraining" element={<NewTrainingForm/>}/>             
              </Routes>
            </div>
        </div>
      </TrainingContextProvider>
    </UserContextProvider>
  );
}

export default App;