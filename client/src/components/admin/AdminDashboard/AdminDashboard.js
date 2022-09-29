//import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
//import DashTraining from '../DashTraining/DashTraining';
import { useNavigate } from "react-router-dom";


function Dashboard(){
    const navigate = useNavigate();

    function handleClick() {
        navigate("/newtraining")
    }

    return (
        <>
            <button onClick={handleClick}>New Training</button>
        </>
    )
}

export default Dashboard;