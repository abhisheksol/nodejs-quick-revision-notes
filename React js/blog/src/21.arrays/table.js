import React from "react-bootstrap"
import Table from 'react-bootstrap/Table';
export default function Aable() {



    
    const arr = [
        { class: "tyco", name: "abhishek", rollno: 88, divison: "cse b" },
        { class: "dsy", name: "vivek", rollno: 72, divison: "cse a" },
        { class: "fyco", name: "rakesh", rollno: 44, divison: "cse c" },
        { class: "kyco", name: "om", rollno: 15, divison: "cse d" }
    ]

    return (
        <div>


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

            <Table striped bordered hover className="mx-4">
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
                        arr.map((items, i) =>
                            <tr>
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