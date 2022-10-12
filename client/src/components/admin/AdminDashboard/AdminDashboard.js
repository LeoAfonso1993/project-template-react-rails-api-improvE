//import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
//import DashTraining from '../DashTraining/DashTraining';
import { useNavigate } from "react-router-dom";


function Dashboard(){
    const navigate = useNavigate();

    function handleClick() {
        navigate("/newtraining")
    }
    function handleClickUsers(){
        navigate("/adminuserpage")
    }

    function handleClickAssignments(){
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