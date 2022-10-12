import React from 'react'
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import UserCards from '../UserCards/UserCards';

function UserSection() {

    const {userList} = useContext(UserContext);

    const uCards = userList.map((u) => {
            return(
                <Col>
                    <UserCards 
                    key={u.name}
                    id={u.id}
                    name={u.name}
                    email={u.email}
                    is_admin={u.is_admin}
                    />
                </Col>
            )
    })

    return(
        <>
            <Container>
                <h1>Training Cards</h1>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {uCards}
                </Row>
            </Container>
        </>
    )
}

export default UserSection;