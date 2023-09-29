import './App.css';
import POST from "./36.API===POST=2/api"
import { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
function App() {

  const [datagot, setgot] = useState("")
  useEffect(() => {
    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datagot)
    }).then((result) => {
      result.json().then((data) => {
        console.log("this is data:", data);
      })
    })
  })



  const getdata = (name, rollno, num) => {
    console.log("Data that is got : ", { name, rollno, num });
    setgot({ name, rollno, num })
  }
  console.log("setgot=>", datagot);
  return (
    <div className='App'>
      <POST reci={getdata} />
    </div>

  );

}

export default App;
