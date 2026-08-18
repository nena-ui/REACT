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
         {/* <h1 className="navyblue">Welcome Jojolapa!!!</h1>
        <h3>My name is {name}</h3>
        <h3>I'm {age} years old</h3> */}
        <div className="flex justify-between items-center px-20 py-32">
        <div>
        <h1 className="text-4xl font-bold mb-4">Some Catchy Lines</h1>
        <h2 className="text-4xl font-bold mb-6">Line to support the catchy line</h2>
        <p className="text-2xl mb-6">
        The yellow sunflower is a bright, resilient plant that symbolizes happiness and warmth. 
        Young blossoms track the sun daily, while their golden petals attract bees and butterflies. 
        With dark centers full of nutritious seeds, sunflowers beautifully combine natural charm 
        with practical value in gardens worldwide.
        </p>
        <button className="border border-amber-200 px-4 py-2 rounded">
        Get Started
        </button>
        </div>
        <img 
        className="rounded-full w-64 h-64 object-cover" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqDAyqRpnpXJTvnskJuDs6IfvOEt0nPY4wB-AlLLhpg&s" 
        alt="Sunflower" />
        </div>

    </>
    )}

 export default Navbar2
        
        {/* <h1 className ="skyblue">This is navbar.</h1>
        <h3 className="text-red-500">My name is {name}</h3>
       <h3>I'm {age} years old</h3>
       <h3>My fav fruit is {fruit}</h3> */}