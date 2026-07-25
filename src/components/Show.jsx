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

<div className="flex justify-center">
    <div className="flex  flex-col">
        <div style={{backgroundColor:'gray'}} className= "h-20 w-20 rounded -full">
                </div>

            <button {()=>setColor("red")} className="border border-red-400">Red</button>
            <button {()=>setColor("green ")} className="border border-green-400">Green</button>
            <button {()=>setColor("yellow")} className="border border-yellow-400">Yellow</button>
</div>
</div>

<h1>Color change</h1>
    </>
)
}

export default Show