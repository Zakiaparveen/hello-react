function Employee(props){
let employee = [
  { id: 1, name: "Zara", position: "Manager", salary: 80000, department: "HR" },
  { id: 2, name: "Ali", position: "Developer", salary: 95000, department: "IT" },
  { id: 3, name: "Hassan", position: "Designer", salary: 90000, department: "IT" },
  { id: 4, name: "Sara", position: "Accountant", salary: 65000, department: "Finance" },
  { id: 5, name: "Zakia", position: "Team Lead", salary: 400, department: "IT" }
];
 let res= employee.filter((emp)=>{
 return props.id.includes(emp.id)
    })
return(
  <div className="parent">
   {res.map((emp,index)=>{
    return(
      <div className="child">
 <h2 key={index}> {emp.id}:</h2>
 <h3>Name: {emp.name}</h3>
 <h3>Position: {emp.position}</h3>
 <h3> Salary: {emp.salary}</h3>
 <h3> Department: {emp.department}</h3> 
</div>
    )
    })}
    
  </div>
)
}
export default Employee
