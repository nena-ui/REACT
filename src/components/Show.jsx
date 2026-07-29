import { useState } from "react"

function Show () {
   
const [show,setShow] = useState (true)

return (
    <>
    <div className="flex flex-col items-center gap-5">
  {show ?   <h1>Some message</h1> : ""}
 
  <button onClick={()=>setShow(!show)} className="border border-gray-400">
    {show ? "hide" : "show"}

  </button>

 <div>
      <input type={show ? "text" : "password"} className="border border-gray-400" />
<div>
</div>
 </div>
</div>


{/* //Colour Change

const [color,setColor] = useState ("gray")
const[change,setChange] =useState("black")
    <div className="flex justify-center">
  <div className="flex flex-col">
    <div style={{backgroundColor : color }} className="h-20 w-20  rounded-full">
     
    </div>
     <button onClick={()=>setColor("red")} className="border border-gray-400">red</button>
      <button onClick={()=>setColor("yellow")} className="border border-gray-400">yellow</button>
      <button onClick={()=>setColor("green")} className="border border-gray-400">green</button>
    </div>
</div> */}


//Traffic Lights
<div className="flex justify-center">
  <h1  style={{color: change}}>Color change</h1>
</div>
<div className="flex justify-center gap-4 ">
  <button onClick={()=>setChange("red")}className="border border-gray-400">red</button>
  <button onClick={()=>setChange("yellow")}className="border border-gray-400">yellow</button>
  <button onClick={()=>setChange("green")}className="border border-gray-400">green</button>
</div>

</>
)
}