import './App.css'
import Header from './components/Header'; 
import User from './components/Footer'; 
 import Profile from './components/profile';
//  import Employee from './components/Employee';
// import Student from './components/studentcard';
// let studentid=1;
function App() {
let id=3;
id=2;
  return (
    <div>
    {/* <Employee id={[3,1]} /> */}
    <Profile id={[3,2]} studentinfo="student information"/> 
{/* <Student studentinfo="Student ID Card" /> */}

    {/* <Profile  /> */}
    
    
      </div>
  );

}

export default App;

// Let's add something interesting,  pass a student id from props and only render the student data in a card based on student_id 

// Concepts to explore:
// 1- Filtering from array
// 2- Conditional rendering (ternary operator) 

// Can consult react docs.