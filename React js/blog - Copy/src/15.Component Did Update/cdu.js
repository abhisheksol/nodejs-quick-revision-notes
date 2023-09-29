import React from "react";
export default class abhi extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
            ,data:0
        }
    }
    componentDidUpdate(preprops,prestate,snapshot){
        console.log("======================================================");

              console.log("prestate===> ",prestate.count);
              console.log("state===> ",this.state.count);
              if(this.state.count !== prestate.count){
                  this.setState({                             //bina he fi else cha he kam karta nahika mahita nahi
                data:prestate.count                              
              })
              }
         
        
    }
    render(){
        return(
            <div>
                <h1>hello this is CDU {this.state.count}</h1>
                <h1>hello this is prestate {this.state.data}</h1>
                <button onClick={()=>{
                    this.setState({ count: this.state.count +1})
                }}>click</button>
            </div>
     
        )
    }
}