import { useEffect, useState } from "react";

function Register() {

 const [students,setStudents]=useState([])

 useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res=>res.json())
.then(info=>setStudents(info))

 },[]);


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

