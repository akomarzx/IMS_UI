import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function CreatePurchaseOrder() {

  //const baseService = 'http://localhost:8080/api/v1'
  const baseService = 'https://ronaldjro.dev/api/v1'


  const [suppliers, setSuppliers] = useState([]);
  const [accountId, setAccountIdSelected] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }));
  const [quantity, setQuantity] = useState('');
  const [unitAmount, setUnitAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [warehouseId, setWarehouseId] = useState('')
  const [inventory, setInventory] = useState('')
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [warehouses, setWarehouses] = useState([])
  const [inventories, setInventories] = useState([])
  const { user } = useAuth();
  const [orderItems, setOrderItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0.0);

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(`${baseService}/warehouse`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch warehouse');
          }
          return response.json();
        })
        .then(data => {
          setWarehouses(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }

    if (user) {
      fetch(`${baseService}/inventory?page=0&size=100`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch orders');
          }
          return response.json();
        })
        .then(data => {
          setInventories(data.content);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }

    if (user) {
      fetch(`${baseService}/account?type=vendor`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch vendior');
          }
          return response.json();
        })
        .then(data => {
          setSuppliers(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [user]);


  const handleCreatePO = (event) => {
    event.preventDefault();

    if(inventory === -1 || warehouseId === -1 || accountId === -1) {
      return;
    }

    // Implement logic for adding the supplier here
    const supplierData = {
      accountId,
      notes,
      warehouseId,
      orderType: 500010,
      orderItems
    }

    fetch(`${baseService}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.access_token}`,
      },
      body: JSON.stringify(supplierData),
    })
      .then(() => navigate('/PurchaseOrderList'))
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  const handleAddInventoryItem = (event) => {
    // Create a new row item based on the selected inventory and other fields
    event.preventDefault();
    if (!inventory || !quantity) {
      return;
    }
    console.log(inventories)
    const itryName = inventories.filter((item) => item.inventoryId == inventory)
    console.log(itryName)
    const newRow = {
      itryName: itryName[0]?.label,
      id: inventory,
      quantity: quantity,
      unitAmount: unitAmount,
      price: currencyFormat(itryName[0].sellingPrice)
    };

    let total = grandTotal + (itryName[0].sellingPrice * quantity)
    setGrandTotal("$" + parseFloat(total));

    // Add the new row to the tableRows array
    setOrderItems([...orderItems, newRow]);
    // Clear input fields after adding the row
    setInventory('');
    setQuantity('');
    setUnitAmount('');
  }

  return (
    <div className="flex-container mr-[1px] pb-10 mb-20 rounded-xl border border-black border-solid bg-slate-500">
      <div className="container mx-auto py-1.5 font-bold rounded-xl bg-stone-400 w-[850px]">
        <div className="text-xl text-center text-zinc-800 max-md:max-w-full">
          <h1>PURCHASE ORDER INFORMATION</h1>
        </div>
      </div>
      <form>
        <div className="container mx-[180px] text-start font-semibold text-zinc-800 text-xl">
          <label htmlFor="supplierName">Supplier Name:</label>
          <select
            id="suppliers"
            value={accountId}
            className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
            onChange={(e) => setAccountIdSelected(e.target.value)}
          >
            <option value={-1}></option>
            {suppliers.map(supplier => (
              <option key={supplier.id} value={supplier.id}>{supplier.label}</option>
            ))}
          </select>
        </div>
        <div className="container mx-[200px] mt-5 text-start font-semibold text-zinc-800 text-xl">
          <label htmlFor="date">Dated:</label>
          <input
            type="text"
            id="date"
            readOnly
            value={date}
            className="grow justify-center mt-2 mx-[140px] mr-1 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mt-5 mx-[80px] text-start font-semibold text-zinc-800 text-xl">
          <label htmlFor="shipTo">Ship To (Warehouse Location):</label>
          <select
            id="warehouse"
            value={warehouseId}
            className="grow justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[350px]"
            onChange={(e) => setWarehouseId(e.target.value)}
          >
            <option key={-1} value={-1}></option>
            {warehouses.map(warehouse => (
              <option key={warehouse.id} value={warehouse.id}>{warehouse.label}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-between px-10 py-2.5 mt-8 text-2xl rounded-2xl bg-zinc-800 text-stone-400 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full">
          <div className="">Inventory Item</div>
          <div className="">Quantity</div>
          <div className="">Add</div>
        </div>
        <div className='flex justify-between'>
          <select
            id="inventories"
            value={inventory}
            className="justify-center mt-2 mx-3 px-2 py-1 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800"
            onChange={(e) => setInventory(e.target.value)}
          >
            <option key={-1} value={-1}></option>
            {inventories.map(inventory => (
              <option key={inventory.inventoryId} value={inventory.inventoryId}>{inventory.label}</option>
            ))}
          </select>
          <input
            type="number"
            min={0}
            id="quantity"
            value={quantity}
            className="mt-2 px-2 py-3 text-xl rounded-lg border-2 border-solid bg-stone-400 border-zinc-800 text-zinc-800 w-[100px]"
            onChange={(e) => { setQuantity(e.target.value) }}
          />
          <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mx-[30px]' onClick={handleAddInventoryItem}><strong>+</strong></button>
          </div>
        </div>
        <div>
          <div className='mt-2'>
            <table className="table-auto w-full max-md:max-w-full">
              <thead>
                <tr className="text-3xl text-white rounded-2xl bg-zinc-800">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Inventory</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Unit Price $</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((row, index) => (
                  <tr className="text-center text-2xl" key={index}>
                    <td className="px-4 py-2">{row.itryName}</td>
                    <td className="px-4 py-2">{row.inventoryId}</td>
                    <td className="px-4 py-2">{row.quantity}</td>
                    <td className="px-4 py-2">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="self-end mt-10 mr-6 text-3xl text-right max-md:mr-2.5">
          Grand Total: {grandTotal}
        </div>
        <div className="mt-5 w-full border border-white border-solid stroke-[1px] stroke-white max-md:mr-0.5 max-md:max-w-full" />
        <div className="flex flex-col mx-[50px] self-start mt-6 w-full text-3xl max-w-[661px] max-md:max-w-full">
          <p className="italic max-md:max-w-full">
            Public Note
            <span className="text-xl italic">(Your customers will see this optional note)</span>
          </p>
          <div>
            <textarea
              type="text"
              id="quantity"
              value={notes}
              className="shrink-0 mt-3 text-xl text-zinc-800 rounded-xl bg-stone-400 h-[57px] w-[661px] py-2"
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-15 self-center mt-16 text-2xl text-center font-bold text-stone-400 ">
          <div className="grow hover:bg-zinc-800 hover:text-stone-400 px-5 py-2 self-center mx-20 pt-2 pb-1.5 rounded-lg text-zinc-800 bg-stone-400">
            <button id="createPO" onClick={handleCreatePO}>
              Submit
            </button></div>
          <div className="grow hover:bg-zinc-800 hover:text-stone-400 justify-center mx-10 py-2 px-5 rounded-lg text-zinc-800 bg-stone-400">
            <button id="cancel" onClick={() => { navigate('/inventory') }}>Cancel</button></div>
        </div>
      </form>
    </div>
  );
};
export default CreatePurchaseOrder;