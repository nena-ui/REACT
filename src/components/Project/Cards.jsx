import React from "react";

const Card = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {cards.map((card) => (
        <div key className="flex items-center bg-white shadow rounded-lg p-4">
          <div className="text-2xl mr-4">{card.icon}</div>
          <div>
            <h2 className="text-sm">{card.title}</h2>
            <br></br>
            <p className="text-xl font-bold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card