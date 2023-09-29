import React, { useEffect, useState } from "react";
import './App.css';

import Table from "react-bootstrap/Table";
function App() {
  let [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/").then((result) => {
      result.json().then((resp) => {
        console.log("api=>", resp);
        setdata(resp)
      })
    })
  }, [])

  // useEffect(() => {
  //   const apicall=async()=>{
  //     const response=await fetch("http://localhost:5000/")
  //     const resjson=await response.json()
  //     console.log("the data that i got:",resjson);
  //   }


  //   apicall();
  // }, []);
  return (
    <div className='App'>
      <h1>get api call</h1>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Class</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>Divison</th>
        </tr>
        </thead>
        <tbody>
        {data.map((items) => 
         <tr>
        <td>{items.class}</td>
        <td>{items.name}</td>
        <td>{items.rollno}</td>
        <td>{items.divison}</td>
        </tr>
      )}
          </tbody>
        
      </Table>
      
    </div>

  );

}

export default App;