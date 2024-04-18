import React, { useState } from 'react';

function AddInventoryForm() {

    const [itemName, setItemName] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [description, setDescription] = useState('');
    const [unitCost, setUnitCost] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [skuNum, setSkuNum] = useState('');
    const [quantity, setQuantity] = useState('');
    const [location, setLocation] = useState('');

  
    const handleAddInventory = () => {
      // Implement logic for adding the supplier here
      console.log('Adding Inventory:', {
        itemName,
        purchaseDate,
        description,
        unitCost,
        sellingPrice,
        skuNum,
        quantity,
        location,
      });
    };
  return (
   <div className="flex-container ml-[500px] mr-[1px] pb-10 mb-20 rounded-xl border border-black border-solid bg-slate-500 w-[750px]">
      <div className="container mx-auto py-1.5 font-bold rounded-xl bg-stone-400 w-[750px]">
        <div className="text-xl text-center text-zinc-800 max-md:max-w-full"><h1>INVENTORY ITEM DETAILS</h1>
        </div>
      </div>           
  <form className="content-center">
    <div className=" container my-auto text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          className="grow justify-center mt-10 mx-10 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setItemName(e.target.value)}
        />
    </div>     
    <div className="mt-5 mx-auto text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="purchaseDate">Purchase Date:</label>
        <input
          type="date"
          id="purchaseDate"
          value={purchaseDate}
          className="grow justify-center mt-2 mx-12 mr-20 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setPurchaseDate(e.target.value)}
        />
    </div>
    <div className="flex mx-20 mt-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          id="description"
          value={description}
          className="grow justify-center mt-2 mx-12 mr-10 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setDescription(e.target.value)}
        />
    </div>
    <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="unitCost">Weighted Average Unit Cost:</label>
        <input
          type="number"
          id="unitCost"
          value={unitCost}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setUnitCost(e.target.value)}
        />
        </div>
    <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="sellingPrice">Default Selling Price:</label>
        <input
          type="number"
          id="sellingPrice"
          value={sellingPrice}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setSellingPrice(e.target.value)}
        />
    </div>
    <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="skuNum">SKU:</label>
        <input
          type="text"
          id="skuNum"
          value={skuNum}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setSkuNum(e.target.value)}
        />
    </div>
    <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setQuantity(e.target.value)}
        />
    </div>
    <div className="mt-5 content-start text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="location">Warehouse Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setLocation(e.target.value)}
        />
    </div>
    <div className="flex gap-5 self-center mr-10 mt-16 text-2xl text-center font-bold text-stone-400 ">
            <div className="grow hover:bg-zinc-800 hover:text-stone-400 px-5 py-2 self-center mx-20 pt-2 pb-1.5 text-zinc-800 rounded-lg bg-stone-400">
        
          <button id="addInventory" onClick={handleAddInventory}>
            Add Inventory Item
          </button></div>
          <div className="grow hover:bg-zinc-800 hover:text-stone-400 justify-center text-zinc-800 mx-10 py-2 px-5 rounded-lg bg-stone-400">
            <button id="cancel">Cancel</button></div>
    </div>
  </form>
</div>
  );
}
export default AddInventoryForm;