import { useParams } from "react-router-dom";
function User(props) {
  let id=useParams().id
  console.warn("this is data:=> ",useParams());
  return(
    <div className="App">
      <h1>Welcome user!!  </h1>
      <h4>Ur id is : {id}</h4>
      <h4>Ur Name is : {useParams().name}</h4>
      {}
    </div>
  )
  
}
export default User
