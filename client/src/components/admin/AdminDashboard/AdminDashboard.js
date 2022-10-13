//import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
//import DashTraining from '../DashTraining/DashTraining';
import { useNavigate } from "react-router-dom";
import { TrainingContext} from '../../../contexts/TrainingContext';
import { useContext } from "react";


function Dashboard(){
    const navigate = useNavigate();

    const {counter, setCounter} = useContext(TrainingContext);
    
    function handleClick() {
        navigate("/newtraining")
    }
    function handleClickUsers(){
        navigate("/adminuserpage")
    }

    function handleClickAssignments(){
        setCounter(counter + 1)
        navigate("/assignments")
    }

    return (
        <>
            <button onClick={handleClick}>Trainings</button>
            <button onClick={handleClickUsers}>Users</button>
            <button onClick={handleClickAssignments}>Assignments</button>
        </>
    )
}

export default Dashboard;