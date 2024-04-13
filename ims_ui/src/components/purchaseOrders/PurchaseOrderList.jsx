import React, { useState, useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

function PurchaseOrderList() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetch('https://ronaldjro.dev/api/v1/order?type=purchase', {
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
          setOrders(data);
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

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order, index) => (
        <div key={index} className="flex gap-4">
          <PurchaseOrderDetails
            supplier={order.orderReferenceNumber}
            poNumber={order.id}
            total={order.orderItems.reduce((total, item) => total + item.quantity, 0)}
          />
          <PurchaseOrderOptions />
        </div>
      ))}
    </div>
  );
}

function PurchaseOrderDetails({ supplier, poNumber, total }) {
  return (
    <div>
      {supplier} (#{poNumber})
      <br />${total}
    </div>
  );
}

function PurchaseOrderOptions() {
  return (
    <div className="flex flex-col gap-2 text-2xl">
      <div className="flex-auto">Options</div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60cea056d787aa10d7e6b36f84601f01e64f4ee2b7ac7859165c8023fca471a2?apiKey=cc278bcd51f44b949681fbf76d96752a&"
        alt="Options icon"
        className="shrink-0 my-auto aspect-[1.56] fill-zinc-800 w-[25px]"
      />
      <div className="px-12 pt-2.5 pb-4 mt-3 text-xl font-bold rounded-2xl bg-slate-500 max-md:px-5">
        View
        <br />
        Edit
        <br />
        Delete
      </div>
    </div>
  );
}

export default PurchaseOrderList;