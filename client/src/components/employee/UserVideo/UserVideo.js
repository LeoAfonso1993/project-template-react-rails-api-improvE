import React from "react";
import { Container, Header } from 'semantic-ui-react'



function UserVideo({id, header, content, url}){

    return(
        <>
            <Container key={id} text>
                <Header as='h2'>{header}</Header>
                <p>{content.description}</p>
                <iframe width="560" height="315" src={url} title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {console.log(url)}
            </Container>
        </>
    )

}

export default UserVideo;