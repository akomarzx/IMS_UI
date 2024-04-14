import React, { useState } from 'react';

function AddCustomerForm() {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleAddCustomer = () => {
    // Implement logic for adding the customer here
    console.log('Adding customer:', {
      customerName,
      email,
      phone,
      streetAddress,
      city,
      province,
      postalCode,
    });
  };

  return ( 
    <div className="flex-container ml-[500px] mr-[1px] pb-10 mb-20 rounded-xl border border-black border-solid bg-slate-500 w-[750px]">
      <div className="container mx-auto py-1.5 font-bold rounded-xl bg-stone-400 w-[750px]">
        <div className="text-xl text-center text-zinc-800 max-md:max-w-full"><h1>CUSTOMER CONTACT INFORMATION</h1>
      </div>
    </div>           
  <form>
    <div className=" container text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="customerName">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          className="grow justify-center mt-10 mx-10 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setCustomerName(e.target.value)}
        />
    </div>
      <div className="container mt-5 mx-auto ml-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          className="grow justify-center mt-2 mx-20 mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    <div className="container mt-5 ml-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          className="grow justify-center mt-2 mx-20 mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setPhone(e.target.value)}
        />
    </div>
    <div className="container mt-5 ml-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="streetAddress">Street Address:</label>
        <input
          type="text"
          id="streetAddress"
          value={streetAddress}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setStreetAddress(e.target.value)}
        />
    </div>
    <div className="container mt-5 ml-10 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="city">City/Town:</label>
        <input
          type="text"
          id="city"
          value={city}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setCity(e.target.value)}
        />
    </div>
    <div className="container mt-5 ml-12 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="province">Province:
        <select value={province} onChange={(e) => setProvince(e.target.value)} className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl font-semibold rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]">
            <option value="">Select...</option> 
            <option value="option1">Alberta</option>
            <option value="option2">British Columbia</option> 
            <option value="option3">Manitoba</option> 
            <option value="option4">New Brunswick</option> 
            <option value="option5">NewFoundland and Labrador</option> 
            <option value="option6">Northwest Territories</option> 
            <option value="option7">Nova Scotia</option> 
            <option value="option8">Nunavut</option> 
            <option value="option9">Ontario</option> 
            <option value="option10">Prince Edward Island</option> 
            <option value="option11">Quebec</option> 
            <option value="option12">Saskatchewan</option> 
            <option value="option13">Yukon</option> 
        </select>
      </label>
    </div>
    <div className="mt-5 ml-20 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text" pattern="^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$"
          id="postalCode"
          value={postalCode} 
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setPostalCode(e.target.value)}
        />
    </div>
    <div className="flex gap-15 self-center mt-16 text-2xl text-center font-bold text-stone-400 ">
      <div className="grow hover:bg-zinc-800 hover:text-stone-400 px-5 py-2 self-center mx-20 pt-2 pb-1.5 rounded-lg text-zinc-800 bg-stone-400">
          <button id="addSupplier" onClick={handleAddCustomer}>
            Submit
          </button>
      </div>
      <div className="grow hover:bg-zinc-800 hover:text-stone-400 justify-center mx-10 py-2 px-5 rounded-lg text-zinc-800 bg-stone-400">
            <button id="cancel">Cancel</button></div>
      </div>
    </form>
  </div>
);
}
export default AddCustomerForm;