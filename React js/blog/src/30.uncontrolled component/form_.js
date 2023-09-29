
import { useRef } from "react";
import React, { Button, Form } from "react-bootstrap"

export default function Set() {
    let data1=useRef(null)
    let data2=useRef(null)
    let data3=useRef(null)
    function get(e) {
        e.preventDefault()
        console.log("this is abhi");
        console.log(data1.current.value);
        console.log(data2.current.value);
        console.log(data3.current.value);
        console.log(document.getElementById("data4").value);
    }
    return(
        <div className="App">
            <Form>
                <input type="text" ref={data1}/><br/>
                <input type="text" ref={data2}/><br/>
                <input type="text" ref={data3}/><br/>
                <input type="text" id="data4"/><br/>
                
                <Button onClick={get}>send</Button>
            </Form>
        </div>
    )
}