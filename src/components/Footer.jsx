import React from 'react'

function Footer ({fruit,name,age}){
return(
<>
    <h1 className="text-2xl">My name is {name} </h1>
    <h2>My age is {age} </h2>
    <h3>I like {fruit}</h3>
</>

) 
}

export default Footer