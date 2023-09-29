import React from "react";
export default class abhi extends React.Component{
    constructor(){
        super();
        this.data={
            name:"abhishek",
            address:"solapure"
        }
    }
    render(){
       
        return(
            <div>
                <h1>hello abhishek {this.data.address}</h1>
            </div>
        )
    }
}