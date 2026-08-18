import { useState} from "react"
import Todolist from "./components/Todolist"
import Contact from "./components/Contact"
import { Route, Routes } from 'react-router-dom'
import Homepage from "./components/Homepage"
import Coursedetailpage from "./components/Coursedetailpage"
import Navbar from "./components/Navbar"
import MovieWatchlist from "./components/MovieWatchlist"
import  ProductPage  from "./components/Products/ProductPage"
import Newslist from "./news/Newslist"
import APIProductlist from "./components/Products/APIProducts/APIProductlist"
import APIUsers from "./components/Products/APIUsers"
import ExpenseTracker from "./components/Project/ExpenseTracker"
import CrochetPage from "./components/Crochet/CrochetPage"
import BlogsList from "./components/BlogsList"
import Signup from "./components/Signup"
import { useContext } from "react"
import CounterContext from "./components/contexts/CounterContext"
import Dashboard from "./components/Dashboard/Dashboard"
import PropsType from "./components/Dashboard/PropsType"
import PrivateRoutes from "./components/PrivateRoutes"
import AddBlog from "./components/Dashboard/AddBlog"
import DashboardLayout from "./components/Layouts/DashboardLayout"




function App () {
  const[show,setShow]= useState(true)

//props  
    // const[fruit,setfruit]=useState("mango")
    // const fruit ="apple"  //javascript
    // const age = 20

  return (
   <>
    {/* <Navbar name ="Nena" age ={age} fruit ={fruit} />  
    <Footer/>
    <Show />
    <Todolist/> */}

    
  {/* const {count,setCount} = useContext(CounterContext)

  const [show,setShow] = useState (true) */}


     {/* <Navbar />  */}

  <Routes>
    <Route path="/todo" element ={<Todolist/>} />
    <Route path="contacts" element={<Contact/>}/>
    <Route path="/movie" element={<h1>This is spider man</h1>}/>
    <Route path="/movielist" element={<MovieWatchlist/>}/>
    <Route path="/" element={<Homepage/>}/>
    <Route path="*" element={<h1>Page couldn't be found</h1>}/>
    <Route path="/course" element={<h1 className="text-center font-bold text-3xl ">This is Css page </h1>}/>
    <Route path="course/:id" element={<Coursedetailpage/>}/>
    <Route path="/news" element={<Newslist/>}/>
    <Route path="/products" element={<ProductPage/>}/>
    <Route path="/api-products" element={<APIProductlist/>}/>
    <Route path="/users" element={<APIUsers/>}/>
    <Route path="/expenses" element={<ExpenseTracker/>}/>
    <Route path="/crochet" element={<CrochetPage/>}/>
    <Route path="/blog" element={<BlogsList/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="props" element={<PropsType> <Todolist/> </PropsType>}/>

    <Route path="admin" element={<PrivateRoutes><DashboardLayout/></PrivateRoutes>}>
    <Route path="blog" element={<AddBlog/>}/>
    <Route path="product" element={<h1>Dashboard Product</h1>}/>
    <Route index element={<Dashboard/>}/>
    </Route>
     
  </Routes>
  </>
  )
}

export default App