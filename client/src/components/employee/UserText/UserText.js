import React from "react";
import { Container, Header } from 'semantic-ui-react'

function UserText({id, header, content}){

    return(
        <>
            <Container key={id} text>
                <Header as='h2'>{header}</Header>
                <p>{content.description}</p>
            </Container>
        </>
    )

}

export default UserText;