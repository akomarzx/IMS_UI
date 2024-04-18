import React, { useState, useEffect, useContext } from 'react';
import { useAuth } from 'react-oidc-context';
import CodeBookContext from './CodeBookContext';
import { useNavigate } from 'react-router-dom';

function AddSupplierForm() {
  const [label, setLabel] = useState('');
  const [email, setEmail] = useState('');
  const [primaryPhone, setPrimaryPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const { user } = useAuth();
  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const codeBook = useContext(CodeBookContext);
  const [accountType, setAccountType] = useState(null);
  const navigate = useNavigate();

  //get the country and province code values from the codeBook (also used here for setting the vendor account type by appropriate type id)
  //if this is the first component loaded calling the codebook context after a log in, the code book may not be populated intially
  // the codebook provider will fetch when it sees the user object is now populated on this call (see CodeBookProvider.jsx)
  // this useEffect will run when the codebook changes on this population and set the countries and provinces in that initial load case
  useEffect(() => {
    //get list of countries and provinces from the codebook to populate the dropdowns
    //set the default country and province to the first in the list (prevents null data sent if select not changed before submit- ie first option chosen by default)
    const countryCodeBook = codeBook.find(codeBook => codeBook.label === 'Country');
    if (countryCodeBook && countryCodeBook.codeValues.length > 0) {
      setCountries(countryCodeBook.codeValues);
      setCountry(countryCodeBook.codeValues[0].id);
    }

    const provinceCodeBook = codeBook.find(codeBook => codeBook.label === 'Provinces/State');
    if (provinceCodeBook && provinceCodeBook.codeValues.length > 0) {
      setProvinces(provinceCodeBook.codeValues);
      setProvince(provinceCodeBook.codeValues[0].id);
    }

    const accountTypeCodeBook = codeBook.find(codeBook => codeBook.label === 'Account Type');
    if (accountTypeCodeBook) {
      const vendorAccountType = accountTypeCodeBook.codeValues.find(codeValue => codeValue.label === 'Vendor Account');
      if (vendorAccountType) {
        setAccountType(vendorAccountType.id);
      }
    }
  }, [codeBook]);


  const handleAddSupplier = (event) => {
    event.preventDefault();  
    // Implement logic for adding the supplier here
    console.log('Adding supplier:', {
      label,
      email,
      primaryPhone,
      addressLine1,
      addressLine2,
      city,
      province,
      country,
    });

    const supplierData = {
      accountType,
      label,
      email,
      address: {
        addressLine1,
        addressLine2,
        city,
        province,
        country,
        primaryPhone,
      }
    }

    fetch('https://ronaldjro.dev/api/v1/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.access_token}`,
    },
    body: JSON.stringify(supplierData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
    
  };

return (
  <div className="flex-container mx-auto mt-20 mb-20  pb-10 rounded-xl bg-slate-500 max-w-[750px]">
    <div className="container mx-auto py-1.5 font-bold rounded-xl bg-stone-400 w-[750px]">
      <div className="text-xl text-center text-zinc-800 max-md:max-w-full">
        <h1>SUPPLIER CONTACT INFORMATION</h1>
      </div>
    </div>
    <form>
      <div className="container my-auto text-center font-semibold text-zinc-800 text-xl">
        <label htmlFor="label">Supplier Name:</label>
        <input
          type="text"
          id="label"
          value={label}
          className="grow justify-center mt-10 mx-10 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setLabel(e.target.value)}
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
        <label htmlFor="primaryPhone">Phone:</label>
        <input
          type="tel"
          id="primaryPhone"
          value={primaryPhone}
          className="grow justify-center mt-2 mx-20 mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setPrimaryPhone(e.target.value)}
        />
      </div>

      <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
        <label htmlFor="addressLine1">Address Line 1:</label>
        <input
          type="text"
          id="addressLine1"
          value={addressLine1}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setAddressLine1(e.target.value)}
        />
      </div>

      <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
        <label htmlFor="addressLine2">Address Line 2:</label>
        <input
          type="text"
          id="addressLine2"
          value={addressLine2}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </div>

      <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      
    <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="province">Province:</label>
      <select
        id="province"
        value={province}
        className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
        onChange={(e) => setProvince(e.target.value)}
      >
        {provinces.map(province => (
          <option key={province.id} value={province.id}>{province.label}</option>
        ))}
      </select>
    </div>

    <div className="mt-5 text-center font-semibold text-zinc-800 text-xl">
      <label htmlFor="country">Country:</label>
      <select
        id="country"
        value={country}
        className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
        onChange={(e) => setCountry(e.target.value)}
      >
        {countries.map(country => (
          <option key={country.id} value={country.id}>{country.label}</option>
        ))}
      </select>
    </div>

      <div className="flex gap-15 self-center mt-16 text-2xl text-center font-bold text-stone-400 ">
        <div className="grow px-5 py-2 self-center mx-20 pt-2 pb-1.5 rounded-lg bg-zinc-800">
          <button id="addSupplier" onClick={handleAddSupplier}>
            Submit
          </button>
        </div>
        <div className="grow justify-center mx-10 py-2 px-5 rounded-lg bg-zinc-800">
          <button id="cancel" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </div>
    </form>
  </div>
);
}
export default AddSupplierForm;