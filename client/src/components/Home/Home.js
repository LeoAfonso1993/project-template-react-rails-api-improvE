import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function handleClick(){
        return navigate("/login")         
    }
 
    return (
        <>
            <h1>Welcome to ImprovE Training</h1>
            <h3>Please Select Your Account Type</h3>
            <button type="button" onClick={handleClick}>Admin</button>
            <button type="button" onClick={handleClick}>Employee</button>
        </>
    )
}

export default Home;