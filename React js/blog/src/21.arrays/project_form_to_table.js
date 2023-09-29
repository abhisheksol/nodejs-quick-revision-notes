import { useState } from "react";
import React from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Aable() {

let [classname,setclass]=useState("")
let [name,setname]=useState("")
let [rollno,setrollno]=useState("")
let [divison,setdivison]=useState("")

function get(e){
    console.log(classname);
    console.log(name);
    console.log(rollno);
    console.log(divison);
    e.preventDefault()
}

    const arr = [
        { class: classname, name: name, rollno: rollno, divison: divison },
        // { class: "dsy", name: "vivek", rollno: 72, divison: "cse a" },
        // { class: "fyco", name: "rakesh", rollno: 44, divison: "cse c" },
        // { class: "kyco", name: "om", rollno: 15, divison: "cse d" }
    ]

    return (
        <div>

             <Form onSubmit={get} className="m-4">

               <label>class:</label><input type="text" onChange={(e)=>setclass(e.target.value)}/><br/><br/>
               <label>name: </label><input type="text" onChange={(e)=>setname(e.target.value)}/><br/><br/>
               <label>rollno: </label><input type="text" onChange={(e)=>setrollno(e.target.value)}/><br/><br/>
               <label>divison: </label><input type="text" onChange={(e)=>setdivison(e.target.value)}/><br/><br/>
               <Button type="submit">submit</Button>
             </Form>
            {/* <tr>
                    <th>class</th>
                    <th>name</th>
                    <th>rollno</th>
                    <th>divison</th>

                </tr>
                
                    {
                        arr.map((items)=>
                        <tr>
                        <td>{items.class}</td>
                        <td>{items.name}</td>
                        <td>{items.rollno}</td>
                        <td>{items.divison}</td>
                        </tr>
                
                        )
                    }
                 */}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class</th>
                        <th>Name</th>
                        <th>Rollno</th>
                        <th>Divison</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((items, i) =>  //error in console==>
                        // react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
                        //yasathi key={kula tai values pass karto}

                            <tr key={i}>  
                            {/* react la mahiti hona sathi kasa ak element la find karch tya sathi ami key dato ani tari
                            react cha virtualdom confuse hoto */}
                                <td>{i+1}</td>
                                <td>{items.class}</td>
                                <td>{items.name}</td>
                                <td>{items.rollno}</td>
                                <td>{items.divison}</td>
                                
                            </tr>
                        )
                    }

                  
                </tbody>
            </Table>



        </div>
    )

}