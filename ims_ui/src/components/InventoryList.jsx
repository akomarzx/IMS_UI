import React, { useState, useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function InventoryItem({ inventoryItem }) {
  //Dynamically create table body (purchase order information)
  //Using w-full etc to set div/element size relative to container (w-11/12 is 11/12 of the container width, etc.)
  //Using max-md:max-w-full to set the container width to full width on mobile devices
  return (
    <>
      <tr className="text-center text-3xl">
        <td className="px-4 py-2">
          <div className='flex'>
            {inventoryItem.imgUrl ? (
              <>
                <div>
                  <img src={inventoryItem.imgUrl} width={100} height={100} alt='Invetory Item Picture'></img>
                </div>
              </>
            ) : (
              <></>
            )}
            <div className='flex-row'>
              <p className='px-2 text-left text-2xl font-bold'>{inventoryItem.label?.trim()}</p>
              <p className='px-2 text-left text-base'>SKU: {inventoryItem.sku?.trim()}</p>
              <p className='px-2 text-left text-base'>Category: {inventoryItem.categories.trim()}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-2 text-2xl">{inventoryItem.quantity}</td>
        <td className="px-4 py-2 text-2xl">{inventoryItem.id}</td>
        <td className="px-4 py-2 text-2xl">{currencyFormat(inventoryItem.sellingPrice)}</td>
        <td className="px-4 py-2 text-2xl">{new Date(inventoryItem.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
      </tr>
      <tr>
        <td colSpan='9'>
          <div className="shrink-0 h-0.5 border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full w-11/12 mx-auto"></div>
        </td>
      </tr>
    </>

  );
}

function InventoryPage() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const serviceUrl = 'http://localhost:8080/api/v1/inventory?page=0&size=5'
  //const serviceUrl = 'https://ronaldjro.dev/api/v1/inventory?page=0&size=5''

  useEffect(() => {
    if (user) {
      fetch(serviceUrl, {
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
          setInventoryItems(data?.content);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  //create the list and populate it with the PurchaseOrderListItem component for each table row in the list section
  //create the table for the supplier statistics section from lengths of filtered orders data (above)
  return (
    <header className="flex flex-col py-2.5 center-content w-screen-xl rounded-2xl bg-stone-400 max-md:max-w-full">
      <div className="px-7 flex flex-col w-screen-xl max-md:max-w-full">
        <div className="py-2">
          <h1 className="items-center text-center mb-2 pt-4 pr-16 pb-2 pl-20 text-3xl font-bold underline text-white rounded-2xl bg-slate-500 max-md:px-5 max-md:max-w-full">
            Inventory Items
          </h1>
          <table className="table-auto w-full max-md:max-w-full">
            <thead>
              <tr className="text-2xl text-white bg-zinc-800">
                <th className="rounded-2xl px-4 py-2">Name</th>
                <th className="rounded-2xl px-4 py-2">Quantity</th>
                <th className="rounded-2xl px-4 py-2">Inventory ID</th>
                <th className="rounded-2xl px-4 py-2">Selling Price</th>
                <th className="rounded-2xl px-4 py-2">Date Created</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems.map(item => (
                <InventoryItem key={item.id} inventoryItem={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
}

export default InventoryPage;