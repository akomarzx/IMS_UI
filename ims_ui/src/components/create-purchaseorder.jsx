
import React, { useState } from 'react';

function CreatePurchaseOrder() {
  const [supplierName, setSupplierName] = useState('');
  const [poNum, setPoNum] = useState('');
  const [date, setDate] = useState('');
  const [poSummary, setPoSummary] = useState('');
  const [billTo, setBillTo] = useState('');
  const [shipTo, setShipTo] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitAmount, setUnitAmount] = useState('');
  const [publicNote, setPublicNote] = useState('');

  const handleCreatePO = () => {
    // Implement logic for adding the PO here
    console.log('Creating PO:', {
      supplierName,
      poNum,
      date,
      poSummary,
      billTo,
      shipTo,
      itemDescription,
      quantity,
      unitAmount,
      publicNote,
    });
  };

  return (
    <div className="flex-container ml-[500px] mr-[1px] pb-10 mb-20 rounded-xl border border-black border-solid bg-slate-500 w-[850px]">
        <div className="container mx-auto py-1.5 font-bold rounded-xl bg-stone-400 w-[850px]">
          <div className="text-xl text-center text-zinc-800 max-md:max-w-full"><h1>PURCHASE ORDER INFORMATION</h1>
        </div>
    </div>           
      <form>
        <div className="container mx-[180px] text-start font-semibold text-zinc-800 text-xl">
          <label htmlFor="supplierName">Supplier Name:</label>
            <input
              type="text"
              id="supplierName"
              value={supplierName}
              className="grow justify-center mt-10 mx-20 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
              onChange={(e) => setSupplierName(e.target.value)}
            />
        </div>
          <div className="container mt-5 mx-20 text-start font-semibold text-zinc-800 text-xl">
            <label htmlFor="poNum">Supplier Provided PO Number:</label>
             <input
              type="number"
              id="poNum"
              value={poNum}
              className="grow justify-center mt-2 mx-10 mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
              onChange={(e) => setPoNum(e.target.value)}
            />
        </div>
          <div className="container mx-[200px] mt-5 text-start font-semibold text-zinc-800 text-xl">
            <label htmlFor="date">Dated:</label>
              <input
              type="date"
              id="date"
              value={date}
              className="grow justify-center mt-2 mx-[140px] mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
              onChange={(e) => setDate(e.target.value)}
              />
          </div>
        <div className="flex mt-5 mx-[100px] text-start font-semibold text-zinc-800 text-xl">
          <label htmlFor="poSummary">Brief Summary of PO:</label>
           <textarea
              type="text"
              id="poSummary"
              value={poSummary}
              className="grow justify-center mt-2 mx-12 mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[400px]"
              onChange={(e) => setPoSummary(e.target.value)}
            />
        </div>
          <div className="container mt-5 mx-[200px] mr-1 text-start font-semibold text-zinc-800 text-xl">
            <label htmlFor="billTo">Bill To:</label>
              <input
              type="text"
              id="billTo"
              value={billTo}
              className="grow justify-center mt-2 mx-[130px] px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
              onChange={(e) => setBillTo(e.target.value)}
              />
        </div>
          <div className="mt-5 mx-[80px] text-start font-semibold text-zinc-800 text-xl">
            <label htmlFor="shipTo">Ship To (Warehouse Location):</label>
              <input
              type="text" 
              id="shipTo"
              value={shipTo} 
              className="grow justify-center mt-2 mx-7 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
              onChange={(e) => setShipTo(e.target.value)}
              />
        </div>
          <div className="flex gap-5 px-10 py-2.5 mt-8 text-2xl rounded-2xl bg-zinc-800 text-stone-400 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
            <div className="grow">Item Description</div>
              <div className="ml-[80px]">Qty</div>
               <div className="flex-auto  text-right text-2xl">
                <span className="text-2xl">Unit-Amount</span>{" "}
                <span className="text-xl">(Before Tax)</span>
              </div>
            </div>
          <div>
            <input
              type="text"
              id="itemDescription"
              value={itemDescription} readOnly
              className="grow justify-center mt-8 mx-5 mr-10 px-2 py-3 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[300px]"
              onChange={(e) => setItemDescription(e.target.value)}
            />
            <input
              type="number"
              id="quantity"
              value={quantity} readOnly
              className="grow justify-center float-none mx-[20px] mt-8 ml-10 px-2 py-3 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[100px]"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              type="number"
              id="unitAmount"
              step="0.01"
              min="0"
              value={unitAmount} readOnly
              className="grow justif-end mx-[20px] ml-20 mt-8 px-2 py-3 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[100px]"
              onChange={(e) => setUnitAmount(e.target.value)}
            />
      </div>
        <div className="self-end mt-10 mr-6 text-3xl text-right max-md:mr-2.5">
          <span className="text-2xl">Subtotal: $0.00</span>
            <br />
          <span className="text-2xl">Tax: $0.00</span>
            <br />
            Grand Total: $0.00
        </div>
      <div className="mt-5 w-full border border-white border-solid stroke-[1px] stroke-white max-md:mr-0.5 max-md:max-w-full"
        />
        <div className="flex flex-col mx-[50px] self-start mt-6 w-full text-3xl max-w-[661px] max-md:max-w-full">
          <p className="italic max-md:max-w-full">
            Public Note
            <span className="text-xl italic">(Your customers will see this optional note)</span>
          </p>
        <div>
           <textarea
            type="text"
            id="quantity"
            value={publicNote}
            className="shrink-0 mt-3 text-xl text-zinc-800 rounded-xl bg-stone-400 h-[57px] w-[661px]"
            onChange={(e) => setPublicNote(e.target.value)}
           />
        </div>
      </div>
    <div className="flex gap-15 self-center mt-16 text-2xl text-center font-bold text-stone-400 ">
        <div className="grow hover:bg-zinc-800 hover:text-stone-400 px-5 py-2 self-center mx-20 pt-2 pb-1.5 rounded-lg text-zinc-800 bg-stone-400">
          <button id="createPO" onClick={handleCreatePO}>
            Submit
          </button></div>
        <div className="grow hover:bg-zinc-800 hover:text-stone-400 justify-center mx-10 py-2 px-5 rounded-lg text-zinc-800 bg-stone-400">
            <button id="cancel">Cancel</button></div>
        </div>
    </form>
  </div>
  );
};
export default CreatePurchaseOrder;