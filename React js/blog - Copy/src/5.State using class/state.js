import { Component } from "react";


// class mada jita jita function yata amla **--> this <---** define karun cha ta function use karu shakto   

export default class abhi extends Component{

    constructor(){
        super();                    //yata constructor use kala manun super
        this.state={               // class mada ami this.state use karun state use karto pan 
                                  // java this astya aplayla super() define karva lagta
            data:"abhishek"
        }
         // Bind the method to the instance
        //  this.apple = this.apple.bind(this);
    }
    apple(){
        this.setState({data:"rakesh"})
       
        
    }

    render(){
        return(
            <div>
            <h1>hello it class {this.state.data}</h1>
            <button onClick={()=>this.apple()}>click</button>
            </div>
        )
    }
}