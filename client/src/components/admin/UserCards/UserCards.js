import { useContext } from "react"
import React from "react";
import { Card } from 'react-bootstrap';
import { UserContext } from "../../../contexts/UserContext";
import { Form, Checkbox, Button, Icon } from 'semantic-ui-react'
import { useEffect } from "react";

function UserCards({id, name, email, is_admin}){

    const{counter, setCounter} = useContext(UserContext)
    const [value, setValue] = React.useState('false')

    useEffect(() => {
        if(is_admin === true){
            setValue('true')
        }else {
            setValue('false')
        }
    }, [])


    function handleDelete() {
        fetch(`/deleteuser/${id}`, {
            method: "DELETE",
        })
        .then(() => setCounter(counter + 1))
    }

    function handleClick() {
        const adminValue = value === 'true' ? true : false
        fetch(`/upedateuserpermission/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            is_admin: adminValue,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }


    return(
        <>
            <Card>
                <Card.Header as="h5"><i>User ID:{id}</i></Card.Header>
                <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                <Card.Text>
                    Email: {email} 
                    <Form>
                        <Form.Field>
                            {/* Selected value: <b>{value}</b> */}
                            <h4>Is this user an admin?</h4>
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='Yes'
                                name='checkboxRadioGroup'
                                value='true'
                                checked={value === 'true'}
                                onChange={(e, data) => setValue(data.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='No'
                                name='checkboxRadioGroup'
                                value='false'
                                checked={value === 'false'}
                                onChange={(e, data) => setValue(data.value)}
                            />
                        </Form.Field>
                    </Form>
                </Card.Text>
                <Button onClick={handleDelete}>&nbsp;&nbsp;&nbsp;<Icon name="trash alternate"/></Button>
                <Button onClick={handleClick}>Update Permission</Button>
                </Card.Body>
            </Card>
        </>
    ) 

}

export default UserCards;