import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TrainingContext } from '../../contexts/TrainingContext';
import { Button, Grid, Container } from 'semantic-ui-react'



function Home() {
    const navigate = useNavigate();
    const {counter, setCounter} = useContext(TrainingContext)
    document.title = "improvE"

    function handleClick(){
        //setCounter(counter + 1)
        return navigate("/login")         
    }
 
    return (
        <>
            <Grid id="gridLanding" style={{ height: '100%', backgroundImage: "url(./images/pexels-felix-mittermeier-1146134.jpg)"}} >
                <Container style={{ padding: '250px' }} id="bodyLanding" >
                    <h1 style={{color: 'white'}} id="intro">Welcome to ImprovE Training</h1>
                    <h3 style={{color: 'white'}} id="intro_2">Please Select Your Account Type</h3>
                    <Button type="button" id="btn_1" onClick={handleClick} style={{color: 'white', background: '#FF9190' }}>Admin</Button>
                    <Button type="button" id="btn_2" onClick={handleClick} style={{color: 'white', background: '#FF9190' }}>Employee</Button>
                </Container>
            </Grid>
        </>
    )
}

export default Home;