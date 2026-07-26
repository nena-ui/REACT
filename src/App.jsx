import { useState} from "react"
import Todolist from "./components/Todolist"
import { Route, Routes } from 'react-router-dom'
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import Coursedetailpage from "./components/Coursedetailpage"
import ProductsPage from "./components/Productpage"
import Productcard from "./components/Productcard"


function App () {
//props
    
    // const[fruit,setfruit]=useState("mango")
    // const fruit ="apple"  //javascript
    // const age = 20

  return (
   <>

    {/* <Navbar name ="Nena" age ={age} fruit ={fruit} />  */}

    {/* <Footer/>
    <Navbar /> */}
    {/* <Show /> */}
    {/* <Todolist/> */}
  


    {/* <Navbar2 name ="Aaliyah" age ={age} />/ */}
    {/* <Navbar props ="mern" />
    <Navbar a ="abc" b ="def" />

    {fruit}
    <h1>Hello World!!!</h1>
    <h2>Hello World!!!</h2>
    <h3>Hello World!!!</h3>
    <h4>Hello Wor ld!!!</h4>
    <h5>Hello World!!!</h5>
    <h6>Hello World!!!</h6>
    <Footer /> */}

     {/* <h1>This is my app jsx.</h1>   External */}

    <Navbar/>
        <Routes>
      <Route path="nav" element={<Navbar/>}/>
      <Route path="todo" element ={<h1>This is todo page</h1>} />
      <Route path="movie" element={<h1>This is spider man</h1>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="*" element={<h1>Page couldn't be found</h1>}/>
      <Route path="course" element={<h1 className="text-center font-bold text-3xl ">This is Css page </h1>}/>
      <Route path="course/:id" element={<Coursedetailpage/>}/>
      <Route path="product" element={<ProductsPage/>}/>
      <Route path="items" element={<Productcard/>}/>
     
    </Routes>
    </>
  )
}

export default App