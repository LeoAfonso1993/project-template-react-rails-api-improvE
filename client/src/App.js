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
import TrainingPage from "./components/admin/TrainingPage/TrainingPage";
import UserContainer from "./components/admin/UserContainer/UserContainer";
import Assignments from "./components/admin/Assignments/Assignments";


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
                <Route path="/trainingpage" element={<TrainingPage/>}/>
                <Route path="/adminuserpage" element={<UserContainer/>}/>
                <Route path="/assignments" element={<Assignments/>}/>                        
              </Routes>
            </div>
        </div>
      </TrainingContextProvider>
    </UserContextProvider>
  );
}

export default App;