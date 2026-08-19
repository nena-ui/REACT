import { useState } from "react";
import axios from "axios";


  function TodoList() {

  const [user, setUser] = useState({
    name: "Nena",
    age: 20,
  });


  const [inputValue, setInputValue] = useState("");

  const [count,setCount] = useState(0)

  const [todo, setTodo] = useState([ ]);

  const [editId,setEditId] = useState(null)
  

  //create
  const addTodo = async () => {
  if (inputValue.trim().length === 0) {
    alert("provide some task")
  } else {
    try {
      const response = await axios.post("http://localhost:3000/todo/create",
        {
          title: inputValue,
          description: "",
          isCompleted: false
        }
      )

      console.log(response.data);

      setTodo([todo, response.data]);
      setInputValue("")
    } catch (error) {
      console.log(error)
    }
  }}

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  

  //delete
  const deleteTodo = (idToDelete)=> {
    console.log(idToDelete)
    
    const updatedTodo = todo.filter((item,index)=>{
        return item.id !==idToDelete
    })

    setTodo(updatedTodo)

  }

// [1,2,3,4,5,6]

// const task = {
//   task:1,
//   id:0
// }


    const toggleDone =  (indexToDone)=> {

      const updatedTodo = todo.map((item,index)=> {
        if (index===indexToDone) {
         return {...item,isCompleted:!item.isCompleted}
        }
        else {
        return item
        }
      })
      setTodo(updatedTodo)
    }

    const editTodo = (item)=> {
      setInputValue(item.title)
      setEditId(item.description)
    }
    

    //update
    const updateTodo = async () => {
    try {
    const response = await axios.put("http://localhost:3000/todo/update/${editId}",
      {
        title: inputValue,
        description: "",
        isCompleted: false
      }
    )

    setTodo(
      todo.map((item) =>
        item.id === editId ? response.data : item
      )
    )

    setEditId(null)
    setInputValue("")
  } catch (error) {
    console.log(error)
  }
  }

  return (
    <>
      <div className="flex justify-center pt-20">
        <div className=" ">
          <input
            value={inputValue}
            onChange={(e) => handleChange(e)}
            className="border border-gray-400 "
            type="text"
            placeholder="enter any title"
          />
          <button onClick= {
            ()=> {
              if (editId) {
                updateTodo()
              }else {
                addTodo()
              }
            }
          }>
            {editId ? "update" : "add"} todo
          </button>

          {todo.map((item, index) => (
            <div className="flex gap-4 items-center">
              <span style={{color: item.isCompleted ? "green" : "red",textDecoration : item.isCompleted ? "line-through" : ""}}>{item.title} {index}</span>
              <span>id : {item.id}</span>
              <button onClick={()=>toggleDone(index)} className="border border-gray-200">
                {item.isCompleted ? "undo" : "complete"}
              </button>
              <button onClick={()=>editTodo(item)} className="border border-gray-200">Edit</button>
              <button onClick={()=>deleteTodo(item.id)} className="border border-gray-200">x</button>
            </div>
          ))}
        </div>
      </div>
      <h1>{inputValue}</h1>
    </>
  );
}

export default TodoList;