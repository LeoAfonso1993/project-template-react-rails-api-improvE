import React, {useState, useContext, useEffect} from "react"
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from '../../contexts/UserContext';
import { TrainingContext } from "../../contexts/TrainingContext";
import { Button, Form, Grid, Header, Image, Container, Segment } from 'semantic-ui-react'
import logo from '../../images/improve-low-resolution-logo-transparent-background.png'
import loginStyle from "../LoginPage/LoginPage.module.css"



function LoginPage(){
    const {setUser, user, currentUser, setCurrentUser} = useContext(UserContext);
    const {counter, setCounter, allTrainings} = useContext(TrainingContext);
    document.title = "improvE | Login"
    

    const defaultForm = {    
        email:"",
        password:""
      }
    const [formData, setFormData]=useState(defaultForm)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();


    function handleChange(e){
        const key = e.target.name
        setFormData({
          ...formData,
          [key]:e.target.value
        })
    }
  
    const handleSubmit = async e => {
        e.preventDefault();
        const r = await fetch('/login',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })

        if(r.ok)
            {r.json().then((user)=>{
              setUser(user)
              if(user.is_admin === true){
                console.log(typeof(allTrainings))
                navigate("/admindashboard")
              } else {
                navigate("/mytrainings"); /*Maybe will have to remove push*/
              }
              localStorage.setItem('user', JSON.stringify(user))
              setFormData(defaultForm)  
            })}

        else
            {r.json().then((e)=>setErrors(e.errors))} 
    }

    useEffect(() => {
      fetch("/me")
      .then((response) => response.json())
      .then((data) => setCurrentUser(data))
      .then(() => {setCounter(counter + 1)})
    }, [user])

   

  
    return (
      <div className={loginStyle.background}>
        <Grid textAlign='center' style={{ height: '100vh'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }} className={loginStyle.box}>
            <Header as='h2' style={{color: 'white'}} textAlign='center'>
              <Image alt="logo" src={logo} /> Log-in to your account
            </Header>
            <Form size='large' onSubmit={handleSubmit}>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="email" value={formData.email} onChange={handleChange} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange}
                />
                <Button style={{color: 'white', background: '#FF9190'}}  fluid size='large' type="submit">
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>

        </Grid>
      </div>
    );
}
export default LoginPage;