import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

const SideMenu=()=>{

    return(
        <ListGroup>
  <Link className="list-group-item list-group-item-action"to='/' tag="a" >Home</Link>
  <Link className="list-group-item list-group-item-action"to='/add-courses'tag="a">Add Course</Link>
  <Link className="list-group-item list-group-item-action"to='/view-courses'tag="a">View Courses</Link>
  <Link className="list-group-item list-group-item-action"to='/about'tag="a">About</Link>
</ListGroup>

    );
}

export default SideMenu;
