function Student(props) {

  // 1: Create list of student objects
  let students = [
    {studentid: 1, name: "Zara", phone: "099988888", bio: "I am Zara, CS student." },
    { studentid: 2, name: "Ali", phone: "033322211", bio: "I love coding." },
    { studentid: 3, name: "Sara", phone: "030012345", bio: "Frontend developer." }
  ];

  return (
    <>
      <h1>{props.studentinfo}</h1>

      {/* 2: Map data in card format */}
      {students.map((std) => {
        return (
          <div key={std.studentid} className="card">
         
            <h2>ID: {std.studentid}</h2>
            <h3>Name: {std.name}</h3>
            <p>Phone: {std.phone}</p>
            <p>Bio: {std.bio}</p>
          </div>
        );
      })}
    </>
  );
}

export default Student;
