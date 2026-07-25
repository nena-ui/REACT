import { useState } from "react"

function Counter() {
  // props
  const [fruit,setFruit] = useState("mango")
  // const fruit  = "Apple"
  // const age = 22

  let [age,setAge] = useState(22)

  // const [fruit,setFruit] = useState("mango")


 const sum  =  ()=> setAge(age+10)
  const [count,setCount] = useState(0)

  const [name,setName]=useState("Nena")

  return (
    <>
<div className="flex gap-4">
      <button onClick={()=>setCount(count-1)} className="border border-gray-400">-</button>
      <h1 className="text-2xl font-semibold"> {count}</h1>
    <button onClick={()=>setCount(count+1)} className="border border-gray-400">+</button>
    <button onClick={()=>setCount(0)} className="border border-amber-100">Reset</button>
</div>

<div>
    <div className="flex">
     <button onClick={()=>setName("Nena")} className="border border-gray-400">Name</button>
      <h1 className="text-2xl font-semibold"> {name}</h1>
    <button onClick={()=>setName("Dangol")} className="border border-gray-400">Surname</button>
    
</div>
</div>
   </>
  )
}


export default Counter
