
import React, { useState,useEffect } from "react";


const About=()=>{


    useEffect(()=>{
        document.title="About Us"
       },[]);

    return(

<div>
  <h1>My Company is excelling</h1>  
  <h2>This is about pages</h2>
</div>



    );
}
export default About;