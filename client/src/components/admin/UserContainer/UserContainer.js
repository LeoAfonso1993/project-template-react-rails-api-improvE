import React from 'react'
import { Form, Input } from 'semantic-ui-react'
import UserSection from '../UserSection/UserSection'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { useState } from 'react'
import { Container, Button } from 'semantic-ui-react'


function UserContainer() {

    const{setCounter, counter} = useContext(UserContext)
    document.title = "improvE | New User"
    

    const defaultUser = {    
        name:"",
        email:"",
        password:"",
        password_confirmation:"",
        is_admin: false,
        company_id: 1
      }

      const[userData, setUserData] = useState(defaultUser)
      
      function handleChange(e){
        const key = e.target.name
        setUserData({
          ...userData,
          [key]:e.target.value
        })
      }

      function handleSubmit(e){
        //console.log(userData)
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.errors){
                window.alert("Invalid email or password, please try again")
            }
            console.log(data)})
        .then(() => setUserData(defaultUser))
        .then(() => {
            setCounter(counter + 1)
            setUserData(defaultUser)
        })
      }

    return(
        <>
    
        <div id="trainingContainer">
        <Container>
            <br/>
            <Form onSubmit={handleSubmit}>
                <h2 style={{color: 'white'}}>New User</h2>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-name'
                        control={Input}
                        name="name"
                        value={userData.name}
                        label='Full name'
                        placeholder='Full name'
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        name="email"
                        label='Email'
                        value={userData.email}
                        placeholder='joe@schmoe.com'
                        onChange={handleChange}
                        // error={{
                        //     content: 'Please enter a valid email address',
                        //     pointing: 'below',
                        // }}
                    />

                    <Form.Field
                        id='form-input-control-password'
                        control={Input}
                        name="password"
                        label='Password'
                        placeholder='Password'
                        value={userData.password}
                        onChange={handleChange}
                    />

                    <Form.Field
                        id='form-input-control-password-confirmation'
                        control={Input}
                        name="password_confirmation"
                        label='Password Confirmation'
                        placeholder='Password Confirmation'
                        value={userData.password_confirmation}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Field
                    style={{color: 'white', background: '#FF9190'}}
                    id='form-button-control-public'
                    control={Button}
                    content='Create'
                />
            </Form>
        </Container>
        <br/>
        <Container>
            <h2 style={{color: 'white' }}>All Users</h2>
            <UserSection />
        </Container>
        <br/>
        <br/>
        </div>
        </>
    )

}

export default UserContainer;