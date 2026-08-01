import { useState} from "react"
import Todolist from "./components/Todolist"
import { Route, Routes } from 'react-router-dom'
import Homepage from "./components/Homepage"
import Coursedetailpage from "./components/Coursedetailpage"
import Navbar from "./components/Navbar"
import MovieWatchlist from "./components/MovieWatchlist"
import { ProductPage } from "./components/products/ProductPage"
import Newslist from "./news/Newslist"
import APIProductlist from "./components/Products/APIProducts/APIProductlist"
import APIUsers from "./components/Products/APIUsers"


function App () {
  const[show,setShow]= useState(true)
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

    <Navbar/>
  
   
      <Routes>
      <Route path="/todo" element ={<h1>This is todo page</h1>} />
      <Route path="/movie" element={<h1>This is spider man</h1>}/>
      <Route path="/movielist" element={<MovieWatchlist/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="*" element={<h1>Page couldn't be found</h1>}/>
      <Route path="/course" element={<h1 className="text-center font-bold text-3xl ">This is Css page </h1>}/>
      <Route path="course/:id" element={<Coursedetailpage/>}/>
      <Route path="/news" element={<Newslist/>}/>
     <Route path="products" element={<ProductPage/>}/>
     <Route path="api-products" element={<APIProductlist/>}/>
     <Route path="users" element={<APIUsers/>}/>
     
     
    </Routes>
    </>
  )
}

export default App