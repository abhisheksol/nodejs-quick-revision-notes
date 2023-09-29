import React, { useState } from "react";
export default class abhi extends React.Component{
    constructor(){
        super()
        this.state={
            name:"abhishek",
            message:"abhishek is don!!"
        }
    }
    run(){
        this.setState({name:"abhishek is the don"})
    }
    render(){
        
        
        return(
            <div>
                <h1>hello this is {this.state.name}</h1>
                <button onClick={()=>this.run()}>click</button>
            </div>
        )
    }
}