import { useEffect, useState } from "react";

function Register() {

 const [students,setStudents]=useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 


 useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res=>{
  if(!res.ok) throw new Error("something Wrong")
    return res.json()
})
.then(info=>{setStudents(info);
setLoading(false);
 })
.catch(error=>{
  setError(error.message);
   setLoading(false);
 
})
 },[]);

 if(loading){
  return <h2>Loading....</h2>
 }

 if(error){
  return <h2> Error:{error} </h2>
 }


 return(
<>
 {students.map((s,id)=>(
   <>
   <div className="parent">
  <div className="card">
  <h2 key={s.id}>   {s.id}</h2>
  <h3>{s.title}</h3>
  <h3>{s.completed}</h3>
 </div>
 </div>
  </>
 )
 )}
 
 </>
 )
 }
export default Register;

