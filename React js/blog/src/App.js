import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { set } from 'mongoose';


function App() {
  let [data, setdata] = useState([])
  let [name, setname] = useState("none")
  let [classes, setclass] = useState("none")
  let [rollno, setrollno] = useState("none")
  useEffect(() => {
    refresh()
  }, [])

  function refresh() {
    fetch("http://localhost:5000/").then((result) => {
      result.json().then((resu) => {
        console.log("got => ", resu);
        setdata(resu)
        setname(resu[0].name)
        setclass(resu[0].class)
        setrollno(resu[0].rollno)
        
      })
    })

  }
  function send(id) {
    console.log("id recived => ", id);
    fetch("http://localhost:5000/" + id, {
      method: "DELETE"
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        refresh()                        //he fetch instruction ajun akada call tava items delete jala asta
      })
    })

  }

  function update(id) {
    console.log("updated data is :",id);
    console.log(data[id]);
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
          {data.map((items, i) =>
            <tr>
              <td key={i}>{i + 1}</td>
              <td >{items.name}</td>
              <td >{items.rollno}</td>
              <td >{items.class}</td>
              <td >{items.divison}</td>
              <td ><button onClick={() => send(items.rollno)}>Delete</button></td>
              <td ><button onClick={() => update(items.rollno)}>Update</button></td>
            </tr>


          )}
        </tbody>
      </Table>
      <div>
        <input type='text' value={name} onChange={(e) => setname(e.target.value)} />     <br /><br />
        <input type='text' value={classes} onChange={(e) => setclass(e.target.value)} /><br /><br />
        <input type='text' value={rollno} onChange={(e) => setrollno(e.target.value)} /><br /><br />
        <button onClick={""}>Update</button>
      </div>
    </div>

  );

}

export default App;
