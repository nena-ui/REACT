function Navbar2 ({age,name}) {

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

    )
}

export default Navbar2   