import React from 'react';

const SalesOrderList = () => {
  // Function to handle click event for button
  const handleAddSalesOrderButton= () => {
    console.log('Button clicked');
    // Add your logic here for button click event
  
  };

  return (
    <div className="flex-container ml-[500px] px-20 py-5 justify-center rounded-xl border border-black text-2xl hover:bg-zinc-800 hover:text-stone-400 font-bold text-center w-[400px] text-zinc-800 bg-stone-400">
      <button id="addSalesOrderBtn" onClick={handleAddSalesOrderButton}>Add Sales Order</button>
    </div>
  );
};

export default SalesOrderList;
