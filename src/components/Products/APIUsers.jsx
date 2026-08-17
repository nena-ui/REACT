import React, { useEffect, useState } from 'react'

const APIUsers = () => {
 const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://dummyjson.com/users",
    );
    const finalResponse = await response.json();
    setUsers(finalResponse.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  console.log(users)
  return (
    <div>
          <div>
      <div className="grid grid-cols-3 gap-8">
        {users.map((item) => (
          <div key={item.id}>
            {/* <img src={item.images[0]} alt="" /> */}
            <h1>{item.firstName}</h1>
            <h1>{item.gender}</h1>
            <p>{item.phone}</p>
            <p>${item.password}</p>

          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default APIUsers