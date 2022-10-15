import React from "react";
import { Container, Header } from 'semantic-ui-react'

function UserPicture({content, id, header}){

    return(
        <>
            <Container key={id} text>
                <Header as='h2'>{header}</Header>
                <p>{content.description}</p>
                <img style={{ width: 600 }} alt="" src={content.url}></img>
            </Container>
        </>
    )

}

export default UserPicture;