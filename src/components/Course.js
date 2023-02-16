import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {Card,Container,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button} from "reactstrap";
import axios from "axios";
import base_url from "../Api/bootApi";
import { toast } from "react-toastify";
import AddCourses from './AddCourses';
import { useState } from 'react';


const Course=({course,update})=>{

    const [updatedTitle,setUpdatedTitle] =useState(course.title);
    const [updatedDescription,setUpdatedDescription] =useState(course.description);

    const deleteCourse=(id)=>{ 
        axios.delete(`${base_url}/courses/${id}`).then((response)=>{
            toast.success("course has been successfully deleted");
            update(id);
        },
        (error)=>{
            toast.error("Sorry something went wrong");
        }
        )

       


    }

    //To update courses
    const updateCourse=()=>{

        const updatedCourse={
            id:course.id,
            title:updatedTitle,
            description:updatedDescription
        };
        axios.put(`${base_url}/courses/${course.id}`,updatedCourse).then(
            (response)=>{
                toast.success("course updated successfully");
                update(course.id);
            },
            (error)=>{
                toast.error("Something went wrong");
            }
        )

    };



  
    





    return(
<Card>
    <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container>
       <input type="text" value={updatedTitle} onChange={(e)=>setUpdatedTitle(e.target.value)}></input>
        <input type="text" value={updatedDescription} onChange={(e)=>setUpdatedDescription(e.target.value)}></input>
            
            <Button color="danger" onClick={updateCourse}>Update</Button>

            <Button color="warning" onClick={()=>{
                deleteCourse(course.id);
            }}>Delete</Button>
        </Container>
    </CardBody>
</Card>


    );}

export default Course;