import React from "react";
import { Container, Header } from 'semantic-ui-react'



function UserVideo({id, header, content}){

    return(
        <>
            <Container key={id} text>
                <Header as='h2'>{header}</Header>
                <p>{content.description}</p>
                <iframe width="560" height="315" src={content.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Container>
        </>
    )

}

export default UserVideo;