import React from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function Nested() {

    const arr = [
        {
            class: "tyco", name: "abhishek", rollno: 88, address: [{ city: "solapur", pincode: 41003, adress: "dsj naka solapur" },
            { city: "solapur", pincode: 41003, adress: "dsj naka solapur" },
            { city: "solapur", pincode: 41003, adress: "dsj naka solapur" }]
        },
        {
            class: "dsy", name: "vivek", rollno: 72, address: [{ city: "solapur", pincode: 41003, adress: "dsj naka solapur" }
                , { city: "solapur", pincode: 41003, adress: "dsj naka solapur" }, { city: "solapur", pincode: 41003, adress: "dsj naka solapur" }, { city: "solapur", pincode: 41003, adress: "dsj naka solapur" }]
        },

        
        { class: "fyco", name: "rakesh", rollno: 44, address: [{ city: "solapur", pincode: 41003, adress: "dsj naka solapur" }] },
        { class: "kyco", name: "om", rollno: 15, address: [{ city: "solapur", pincode: 41003, adress: "dsj naka solapur" }] }
    ]
    return (
        <div>
            <Table striped >
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Name</th>
                        <th>Rollno</th>
                        <th>Address</th>
                    </tr></thead>
                <tbody>
                    {
                        arr.map((items, i) =>
                            <tr key={i}>
                                <td>{items.class}</td>
                                <td>{items.name}</td>
                                <td>{items.rollno}</td>

                                <td>
                                    <Table striped>
                                        <tbody>
                                            {
                                                items.address.map((data) =>
                                                    <tr>
                                                        <td>{data.city}</td>
                                                        <td>{data.pincode}</td>
                                                        <td>{data.adress}</td>
                                                    </tr>
                                                )

                                            }
                                        </tbody>
                                    </Table>
                                </td>

                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )

}