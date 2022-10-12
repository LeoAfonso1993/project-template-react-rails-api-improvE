import React from 'react'
import { useContext} from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import { TrainingContext} from '../../../contexts/TrainingContext';
import { UserContext } from '../../../contexts/UserContext';
import { useState, useEffect } from 'react';

function Assignments(){
    const {allTrainings} = useContext(TrainingContext);
    const {userList} = useContext(UserContext);
    const[trainingOptions, setTrainingOptions] =  useState([])
    const[userOptions, setUserOptions] =  useState([])

    useEffect(() => {
        const trainingData = []
        allTrainings.map((training) => {
            const formObj = {
                key: training.id,
                text: training.name,
                value: training.id
            }
            trainingData.push(formObj)
        })
        setTrainingOptions(trainingData)
    }, [])

    useEffect(() => {
        const userData = []
        userList.map((u) => {
            const formObj = {
                key: u.id,
                text: u.name,
                value: u.id
            }
            userData.push(formObj)
        })
        setUserOptions(userData)
    }, [])


    return(
        <>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Select}
                        options={trainingOptions}
                        label={{ children: 'Select Training', htmlFor: 'form-select-control-gender' }}
                        placeholder='Select Training'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
                </Form.Group>
                
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Select}
                        options={userOptions}
                        label={{ children: 'Select User', htmlFor: 'form-select-control-gender' }}
                        placeholder='Select User'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
                </Form.Group>
                <Button type="submit" style={{ color: 'white' }}>Assing</Button>
            </Form> 
            {console.log(trainingOptions)}
        </>
    )
}

export default Assignments;