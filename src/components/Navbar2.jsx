function Navbar2 ({age,name}) {

export const Navbar2 = ({name,age,fruit})=> {
    props
    console.log(x,"x")
    console.log(y,"y")
    console.log(props)

    const user = {
        name : "sunena",
        age : 12
    }
    const {name} = user
console.log(user.name)

const peeps = {
    name : "aaliyah",
    age : 26
}

console.log(peeps.name)


    return(
        <>
         <h1 className="navyblue">Welcome Jojolapa!!!</h1>
        <h3>My name is {name}</h3>
        <h3>I'm {age} years old</h3>
        </>
        ) }

 export default Navbar2


         
/* <div className="flex justify-between items-center px-20 py-30">
            <div>
                <h1 className="text-4xl font-bold">Some Catchy Lines</h1><br/>
               <h2 className="text-4xl font-bold">Line to support the catchy line</h2><br/>
             <p className="text-2xl">The yellow sunflower is a bright, resilient plant that symbolizes happiness and warmth. Young blossoms track the sun daily, while their golden petals attract bees and butterflies. With dark centers full of nutritious seeds, sunflowers beautifully combine natural charm with practical value in gardens worldwide.
             </p><br/>
            <button className="border border-amber-200">Get Started</button>
          </div>
          <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqDAyqRpnpXJTvnskJuDs6IfvOEt0nPY4wB-AlLLhpg&s" alt="" />
          
      </div> */}


        
        {/* <h1 className ="skyblue">This is navbar.</h1>
        <h3 className="text-red-500">My name is {name}</h3>
       <h3>I'm {age} years old</h3>
       <h3>My fav fruit is {fruit}</h3> */}