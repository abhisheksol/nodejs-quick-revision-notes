import { Component, createRef } from "react";

export default class abhi extends Component{
    constructor(){
        super()
        this.refinput=createRef()
    }
//   componentDidMount(){
//     console.log(this.refinput.current.value="1000"); //component mount honacha adi run hotaya

//   }
     getname() {
        console.log(this.refinput.current.value);
        this.refinput.current.style.color="red"
        this.refinput.current.style.backgroundColor="black"
    }
    render(){
        return(
            <div className="App">
                <label>name:</label>
                <input type="text" ref={this.refinput}/>
                <button onClick={()=>this.getname()}>Get..</button>
            </div>
        )
    }
}