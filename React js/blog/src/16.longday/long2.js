import { Component } from "react"
import "./css.css"
export default class abhi extends Component{
 
    constructor(){
        super();
        this.state={
            name:"abhishek" //constructor pahele run hota mange he apo apo set honar
        }
    }
   setname() {
    this.setState({name:"nk orchid is bakwas cllge"})
  }
    render(){
        return(
            <div>
                <h1>this is this information {this.state.name} </h1>
                <button className="btn" onClick={()=>{this.setname()}}>click me</button>
            </div>
        )
    }
}