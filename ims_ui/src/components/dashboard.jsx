import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-container ml-[500px] px-20 py-5 justify-center rounded-xl border border-black text-2xl font-bold text-left w-[850px] text-zinc-800 bg-stone-400">
      <h1>Dashboard</h1>
      <div> {/*this page needs to be updated to make it look more esthetically better */}
        {/* Inventory summary */}
        <h2>Inventory Summary</h2>
        <p>Total Products: 100</p>
        <p>Total Categories: 10</p>
        {/* Add more summary data as needed */}
      </div>
      <div>
        {/* Recent transactions */}
        <h2>Recent Transactions</h2>
        <ul>
          <li>Product A - Sold 5 units - $50</li>
          <li>Product B - Added 10 units</li>
          {/* Add more recent transactions */}
        </ul>
      </div>
    </div>

  );
};

export default Dashboard;
