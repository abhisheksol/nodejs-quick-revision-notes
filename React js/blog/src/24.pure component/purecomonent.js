import { PureComponent } from "react";
// check if component is updated then only run code else dont run code
// determine if a re-render is necessary. If the props and state haven't changed,
//  it prevents a re-render, which can improve performance.
export default class abhi extends PureComponent{
    constructor(){
        super()
        this.state={
            count:1

        }
    //    suppose ami ak button click var ak ak ni increment hotya ata last limit ami 5 tavalo samja "
    // <h1>no to incrment :5<h1/>
    // <button> ata already 5 alya button pure component check karta ki " component update jala ka , nahi " tar mi faltu mada button dabla var purna code ( render(){...} )ka run karu 
    // yacha impact performance var honar component kahi update jala nahi kasa parta run karcha btn dablaya var""
    }
    render(){
        console.log("if u see this means componect is chnaged or means update");
        // //if u see this means componect is chnaged or means update
//when state is same u will not see this
        return(
            <>
            <h2>{this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>update</button> 
            {/* log is printed bcz state is changed */}
            <button onClick={()=>this.setState({count:this.state.count})}>update</button>
             {/* log is not printed bcz state is not changed */}
            </>
        )
    }
}