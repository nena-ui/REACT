import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Expense = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
        <div className="flex justify-between gap-4">
          <button className="px-4 py-2 rounded-full bg-gray-200 text-black">Expenses</button>

        <button className="px-4 py-2 rounded-2xl bg-black text-white">+ Add Expense</button>
      </div><br />

      <h2 className="text-2xl font-bold mb-4">Expense History</h2>

        <div className="flex items-center rounded px-4 py-4 ">
          <div className="text-gray-400 mr-2"></div>
          {/* <input
            type="text"
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          /> */}
        </div>

        </>
  )
}
        

export default Expense