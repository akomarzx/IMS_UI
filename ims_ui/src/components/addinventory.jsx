import React, { useContext, useState, useEffect } from 'react';
import WarehouseContext from './WarehouseContext';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
import CategoryContext from './CategoryContext';


function AddInventoryForm() {

  const [itemName, setItemName] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [description, setDescription] = useState('');
  const [unitCost, setUnitCost] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [skuNum, setSkuNum] = useState('');
  const [quantity, setQuantity] = useState('');
  const [warehouseLocation, setWarehouseLocation] = useState('');
  const [photo, setPhoto] = useState(null);
  const warehouses = useContext(WarehouseContext);
  const [categoryId, setCategoryId] = useState('');
  const categories = useContext(CategoryContext);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if warehouses array (from context provider) is not empty, and that the value isn't the default '' state set above (by checking it has a .id value, which the above will not)
    if (warehouses && warehouses.length > 0 && warehouses[0].id) {
      // Set the warehouseLocation state to the id of the first warehouse (default select to ensure no null value sent if firt option desired but not clicked)
      setWarehouseLocation(warehouses[0].id);
    }
  }, [warehouses]);

  useEffect(() => {
    if (categories && categories.length > 0 && categories[0].id) {
      setCategoryId(categories[0].id);
    }
  }, [categories]);

  const handleAddInventory = (event) => {
    event.preventDefault();
    // Implement logic for adding the inventory here
    console.log('Adding Inventory:', {
      itemName,
      purchaseDate,
      description,
      unitCost,
      sellingPrice,
      skuNum,
      quantity,
      warehouseLocation,
    });

    // Create a FormData object and append the photo
    //back end expects a form data object with a file field (will be sent in request as file: ($binary) where binary represents binary image data of the photo uploaded by the user)
    const formData = new FormData();
    formData.append('file', photo);

    // Upload the photo
    fetch('https://ronaldjro.dev/api/v1/inventory/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.access_token}`,
      },
      body: formData,
    })
      .then(response => response.text())//response is plain text here, not json (string url of the uploaded photo)
      //rest of the code executes after the photo is uploaded (contained within this .then block)
      //data is the image url returned from the upload endpoint here (endpoint only returns a url, that's it.  No property name or anything else, just the url string itself - plaintext)
      // if it were say url: ($stringurl) then data.url would be used to access the url string
      .then(data => {
        // Include the photo URL in the inventoryData
        // retrieved from the photo upload endpoint
        const inventoryData = {
          product: {
            sku: skuNum,
            purchasePrice: unitCost,
            label: itemName,
            description,
            imageUrl: data,
            categoryId,
            sellingPrice,
          },
          warehouse: warehouseLocation,
          quantity,
        };

        fetch('https://ronaldjro.dev/api/v1/inventory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.access_token}`,
          },
          body: JSON.stringify(inventoryData),
        })
          .then(response => response.json())
          .then(data => console.log(data),
            navigate('/inventory')
          )
          .catch((error) => {
            console.error('Error:', error);
          });
      });
  };

  return (
    <div className="flex-container  mr-[1px] pb-10 mb-20 rounded-xl border border-black border-solid bg-slate-500 w-[750px]">
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
          <label htmlFor="photo" className="mt-5 text-center font-semibold text-zinc-800 text-xl">Photo:</label>
          <input
            type="file"
            id="photo"
            className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
            onChange={(e) => setPhoto(e.target.files[0])}
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
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={categoryId}
            className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5 content-start text-center font-semibold text-zinc-800 text-xl">
          <label htmlFor="location">Warehouse Location:</label>
          <select
            id="location"
            value={warehouseLocation}
            className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
            onChange={(e) => setWarehouseLocation(e.target.value)}
          >
            {warehouses.map(warehouse => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.label}
              </option>
            ))}
          </select>
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