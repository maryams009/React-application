import { Button } from "reactstrap";
import React, { Fragment,useEffect, useState } from "react";
import {Form, FormGroup, Input,Label,Container } from "reactstrap";
import axios from "axios";
import base_url from "../Api/bootApi";
import { toast } from "react-toastify";
const AddCourses=()=>{

  useEffect(()=>{
    document.title="Add courses"
   },[]);

   const [course,setCourse]=useState({});

   //form submission handleForm
   const handleForm=(e)=>{
    postDataToServer(course);
    console.log(course);
    e.preventDefault();

   };

   // creating a function to post or add data to server

   const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response);
        console.log("success")
        toast.success("Course added successfully");
        setCourse({id:"",title:"",description:""});


      },
      (error)=>{
        console.log(error);
        console.log("error");
        toast.error("something went wrong");
      }
    )

   };

return(
<Fragment>
    <h1 className="my-3">Fill Course details</h1>

    <Form onSubmit={handleForm}>
        <FormGroup>
            <Label for="userid">Course Id</Label>
            <Input type="text"
             placeholder="Enter here"
             name="userid" id="userid"
             onChange={(e)=>{
              setCourse({...course,id:e.target.value});
    
             }}
             />
        </FormGroup>

        <FormGroup>
            <Label for="title">Course Title</Label>
            <Input type="text"
             placeholder="Enter title here"
             name="title" id="title"
             onChange={(e)=>{
              setCourse({...course,title:e.target.value});
    
             }}
             />
        </FormGroup>

        <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea"
             placeholder="Enter description here"
             name="description" id="description"
             onChange={(e)=>{
              setCourse({...course,description:e.target.value});
    
             }}
             style={{height:150}}
             />
        </FormGroup>
      <Container>
        <Button type="submit" color="success">Add</Button>
        <Button type="reset" onClick={()=>{
          setCourse({id:"",title:"",description:""});
        }} color="warning ml-2">Clear</Button>
      </Container>
    
    </Form>
  
</Fragment>


);

}
export default AddCourses;