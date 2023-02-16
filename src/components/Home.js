
import React, { useState,useEffect } from "react";
import { Container,Button } from 'reactstrap';
import {toast} from 'react-toastify';

function Home(){

    useEffect(()=>{
        document.title="Home"
       },[]);

    const btnHandle=()=>{

        toast("Hello bilal motay kadu");}

    return(
        <div>
            <section className='text-center bg-info'>
                <h2>Make fun of Bilal</h2>
                <p>Bilal is very mota insan but he is caring</p>
                <Container>
                    <Button color="dark" outline="dark" onClick={btnHandle}>Start</Button>
                </Container>




            </section>
        </div>


    );
}
export default Home;