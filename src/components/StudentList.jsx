import React from 'react'

function StudentList() {
    const students=[
        {
            id:1,
            name:"Ram",
            age:19
        },
          {
            id:2,
            name:"laxman",
            age:20
        },
          {
            id:3,
            name:"Shyam",
            age:18
        },
         {
            id:4,
            name:"Shyam",
            age:18
        },
        

    ];
  return (
    <div>
     <h2 className='text-3xl'>Student List</h2>
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>{student.id}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{student.name}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}  

export default StudentList