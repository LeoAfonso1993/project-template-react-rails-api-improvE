import React from "react";
import { Container, Header } from 'semantic-ui-react'



function UserVideo({id, header, content, url}){

    function VideoPlayer({ url }) {
        const videoID = url.match(/(?<=v=|youtu.be\/)[^&?]+/)?.[0];
        const embedURL = `https://www.youtube.com/embed/${videoID}`;
      
        return (
          <div>
            {videoID ? (
              <iframe
                width="560"
                height="315"
                src={embedURL}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>Please provide a valid YouTube link.</p>
            )}
          </div>
        );
      }



    return(
        <>
            <Container key={id} text>
                <Header as='h2'>{header}</Header>
                <p>{content.description}</p>
                {/*<iframe width="560" height="315" src={url} title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/}
                <VideoPlayer url={url} />
                {console.log(url)}
            </Container>
        </>
    )

}

export default UserVideo;