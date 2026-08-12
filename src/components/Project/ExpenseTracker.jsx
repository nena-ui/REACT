import React from 'react'
import Cards from "./Cards";
import Expense from './Expense';

const ExpenseTracker = () => {

    const cards = [
    { title: "Total Expenses",
         value: "$0.00",
         },

    { title: "This Month", 
        value: "$0.00"},

    { title: "Total Transactions", 
        value: "0" },

    { title: "Categories", 
        value: "0"},
    ];

  return (
    <>
    <nav className="flex justify-between py-4 px-10 h-[10vh] items center">
        <h1 className=" text-xl font-bold">Expenses Tracker</h1> 
         
        <div className="flex items-center gap-4">
            <div className="text-gray-600">Welcome,John Doe</div>
            <button className="flex items-center gap-4 bg-gray-400 text-blue-950 px-4 py-2 rounded">Logout</button>
        </div>
    </nav>
    <Cards cards={cards}/>
    <Expense/>
    </>
  )
}

export default ExpenseTracker
