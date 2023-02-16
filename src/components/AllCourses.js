import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "../Api/bootApi";
import axios from 'axios';
import { toast } from "react-toastify";
import { Button } from "bootstrap";





const AllCourses=()=>{

    useEffect(()=>{
     document.title="All Courses"
    },[]);

// function to call server

const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then((response)=>{
        //success
        console.log(response.data);
        toast.success("Courses has been loaded",{
            position:"bottom-center"
        });
        setCourses(response.data);
    },
    (error)=>{
        //for errors
        console.log(error);
        toast.error("Something went wrong");

    });
};

//calling loading course function
useEffect(()=>{

    getAllCoursesFromServer();
    
},[]);




const[courses,setCourses]=useState([]);


//To remove the courses from the display

const updateCourses=(id)=>{
    setCourses(courses.filter((c)=>c.id!=id));

}



    return(
        <div>

<h1>All Courses</h1>
<p>List of courses are there:</p>
{

    courses.length>0? courses.map((item)=> <Course course={item} update={updateCourses}/>)
    : "No courses"
} 


        </div>




    );
}

export default AllCourses;