import React, { useState } from 'react';

function AddSupplierForm() {
  const [supplierName, setSupplierName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [supplierAddress, setSupplierAddress] = useState('');

  const handleAddSupplier = () => {
    // Implement logic for adding the supplier here
    console.log('Adding supplier:', {
      supplierName,
      email,
      phone,
      supplierAddress,
    });
  };

  return (
  
    <div className="flex-container ml-[500px] mr-[1px] pb-10 mb-20 rounded-xl border border-black border-solid bg-slate-500 w-[750px]">
        <div className="container mx-auto py-1.5 font-bold rounded-xl bg-stone-400 w-[750px]">
        <div className="text-xl text-center text-zinc-800 max-md:max-w-full"><h1>SUPPLIER CONTACT INFORMATION</h1>
      </div>
      </div>           
      <form>
        <div className=" container my-auto text-center font-semibold text-zinc-800 text-xl">
        <label htmlFor="supplierName">Supplier Name:</label>
        <input
          type="text"
          id="supplierName"
          value={supplierName}
          className="grow justify-center mt-10 mx-10 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setSupplierName(e.target.value)}
        />
        </div>
        
        <div className="mt-5 mx-auto text-center font-semibold text-zinc-800 text-xl">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          className="grow justify-center mt-2 mx-20 mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          className="grow justify-center mt-2 mx-20 mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setPhone(e.target.value)}
        />
        </div>
        <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
        <label htmlFor="supplierAddress">Postal Address:</label>
        <input
          type="text"
          id="supplierAddress"
          value={supplierAddress}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setSupplierAddress(e.target.value)}
        />
        </div>
    <div className="flex gap-15 self-center mt-16 text-2xl text-center font-bold text-stone-400 ">
            <div className="grow hover:bg-zinc-800 hover:text-stone-400 px-5 py-2 self-center mx-20 pt-2 pb-1.5 rounded-lg text-zinc-800 bg-stone-400">
        
          <button id="addSupplier" onClick={handleAddSupplier}>
            Submit
          </button></div>
          <div className="grow hover:bg-zinc-800 hover:text-stone-400 justify-center mx-10 py-2 px-5 rounded-lg text-zinc-800 bg-stone-400">
            <button id="cancel">Cancel</button></div>
        </div>
      </form>
    </div>
  );
}
export default AddSupplierForm;