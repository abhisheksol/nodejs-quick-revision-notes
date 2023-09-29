import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';


function App() {  
let [data,setdata]=useState([])
  useEffect(()=>{
    refresh()
  },[])
  function refresh() {
    fetch("http://localhost:5000/").then((result)=>{
      result.json().then((resu)=>{
        console.log("got => ",resu);
        setdata(resu)
      })
    })
    
  }
  function send(id) {
    console.log("id recived => ",id);
    fetch("http://localhost:5000/"+id,{
      method:"DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        refresh()                        //he fetch instruction ajun akada call tava items delete jala asta
      })
    })
    
  }
  return (
    <div className='App'>
      <Table striped>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>Class</th>
          <th>Divison</th>
        </thead>
        <tbody>
        {data.map((items,i)=>
          <tr>
            <td key={i}>{i+1}</td>
            <td >{items.name}</td>
            <td >{items.rollno}</td>
            <td >{items.class}</td>
            <td >{items.divison}</td>
            <td ><button onClick={()=>send(items.rollno)}>Delete</button></td>
          </tr>
        
        
      )}
        </tbody>
      </Table>
      
    </div>

  );

}

export default App;
