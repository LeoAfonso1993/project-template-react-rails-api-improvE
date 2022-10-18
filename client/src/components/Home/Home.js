import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TrainingContext } from '../../contexts/TrainingContext';
import { Button, Form, Grid, Header, Image, Container, Segment } from 'semantic-ui-react'
import photo from '../../images/pexels-felix-mittermeier-1146134.jpg'
import hStyle from '../Home/Home.module.css'

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
            <Grid className={hStyle.grid} style={{ height: '100%', backgroundImage: "url(./images/pexels-felix-mittermeier-1146134.jpg)"}} >
                <Container style={{ padding: '250px' }} className={hStyle.body} >
                    <h1 style={{color: 'white'}} className={hStyle.intro}>Welcome to ImprovE Training</h1>
                    <h3 style={{color: 'white'}}>Please Select Your Account Type</h3>
                    <Button type="button" onClick={handleClick} style={{color: 'white', background: '#FF9190' }}>Admin</Button>
                    <Button type="button" onClick={handleClick} style={{color: 'white', background: '#FF9190' }}>Employee</Button>
                </Container>
            </Grid>
        </>
    )
}

export default Home;