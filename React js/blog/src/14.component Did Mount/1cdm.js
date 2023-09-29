import React from "react";
export default class abhi extends React.Component{
constructor(){
    super()
    console.log("constructor");  //first always constructor will be called 
}
componentDidMount(){
    console.log("C.D.M");//run only once when page is load (mainly used to run api why to simple run the api multiple 
    // times for such thing this is used 
    // ====>IMP <==== when we update any thing in the page this don't run that's major advantage of using it) refer 2cdm.js
    //to make it for update u have use { ===>componentDidUpdate()<=== }
}
    render(){
        return(
            <div>
                <h1>Hello abhishek{console.log("hello")}</h1>  {/* run after the constructor*/}
            </div>
        )
    }
}