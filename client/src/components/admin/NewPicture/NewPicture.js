import { useEffect, useState } from "react";
import React from 'react';
import { Icon } from 'semantic-ui-react';
import {
    Button,
    Form,
    Loader
  } from 'semantic-ui-react'


function NewPicture({setPictureData, pictureData}) {

    const[isLoading, setIsLoading] = useState(false)
    const[urlData, setUrlData] = useState([])
    const[image, setImage] = useState();
    const[loadButton, setLoadButton] = useState("Load Picture")
    const onChange = e => setImage(e.target.files[0]);
  
    const handleUpload = async e => {
        e.preventDefault();
      const file = image
      if (!file) return;
  
      setIsLoading(true);

      const payload =  await fetch("/s3/direct_post").then(res =>
        res.json()
      )
      .then((data) => data)
  
      console.log(payload)
      const url = payload.url;
      const formData = new FormData();
      const fields = payload.fields

      Object.keys(fields).forEach(fieldName => {
        //console.log(fieldName, fields[fieldName]);
        formData.append(fieldName, fields[fieldName]);
      })
      formData.append('file', file)
  
      const xml =  await fetch(url, {
        method: 'POST',
        body: formData
      }).then(res => res.text())
      .then((data) => setUrlData(data))
      .catch((err) => console.log(err));

      e.target.value = null
    };
  
    useEffect(() =>{
        console.log(urlData)
        const parser = new DOMParser()
        const uploadUrl = parser.parseFromString(urlData, 'text/xml')
        const urlLocation = uploadUrl.getElementsByTagName('Location')[0];
        if (urlLocation){
            console.log(urlLocation.innerHTML)
            setIsLoading(false)
            //setPicUrl(urlLocation.innerHTML)
            setPictureData({
              ...pictureData,
              url: urlLocation.innerHTML
          })
            setLoadButton(<Icon name="check"/>)
        }else{
            console.log("")
        }
        
    },[urlData])
    
      return (
        <>
          <Form onSubmit={handleUpload}>
            <input type="file" name="image id="image onChange={onChange}></input>
             {/* {image && <img src={image} alt="The current file" />} */} 

            <Form.Field type="submit" control={Button}>&nbsp;&nbsp;&nbsp;{loadButton}</Form.Field>
          </Form>
          <h3>{isLoading? <Loader active inline='centered' /> : ""}</h3>
        </>
      );
      
    
  }
  
  export default NewPicture;






