import React, { useState, useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

const STATUS_CODES = {
  'PURCHASE_ORDER_PENDING': 'Pending',
  'PURCHASE_ORDER_PO_SENT': 'PO Sent',
  'PURCHASE_ORDER_PARTIALLY_RECEVIED': 'Partially Received',
  'PURCHASE_ORDER_RECEIVED': 'Received',
  'PURCHASE_ORDER_CLOSED': 'Closed',
};

function PurchaseOrderListItem({ order }) {
  const statusLabel = STATUS_CODES[order.orderStatus];
  //Dynamically create table body (purchase order information)
  //Using w-full etc to set div/element size relative to container (w-11/12 is 11/12 of the container width, etc.)
  //Using max-md:max-w-full to set the container width to full width on mobile devices
  return (
    <tbody>
      <tr className="text-center text-2xl">
        <td className="px-4 py-2">{statusLabel}</td>
        <td className="px-4 py-2">{order.orderReferenceNumber}</td>
        <td className="px-4 py-2">{order.id}</td>
      </tr>
      <tr>
        <td colSpan='3'>
          <div className="shrink-0 h-0.5 border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full w-11/12 mx-auto"></div>
        </td>
      </tr>
    </tbody>

  );
}

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

  const notSentPOs = orders.filter(order => order.orderStatus === 'PURCHASE_ORDER_PENDING').length;
  const sentPOs = orders.filter(order => order.orderStatus === 'PURCHASE_ORDER_PO_SENT').length;
  const receivedPOs = orders.filter(order => order.orderStatus === 'PURCHASE_ORDER_RECEIVED' || order.orderStatus === 'PURCHASE_ORDER_PARTIALLY_RECEVIED').length;
  const closedPOs = orders.filter(order => order.orderStatus === 'PURCHASE_ORDER_CLOSED').length;

  //create the list and populate it with the PurchaseOrderListItem component for each table row in the list section
  //create the table for the supplier statistics section from lengths of filtered orders data (above)
  return (
    <header className="flex flex-col py-2.5 center-content w-screen-xl rounded-2xl bg-stone-400 max-md:max-w-full">
      <div className="px-7 flex flex-col w-screen-xl max-md:max-w-full">
        <div className="py-2">
          <h1 className="items-center text-center mb-2 pt-4 pr-16 pb-2 pl-20 text-3xl font-bold underline text-white rounded-2xl bg-slate-500 max-md:px-5 max-md:max-w-full">
            Purchase Orders
          </h1>
          <table className="table-auto w-full max-md:max-w-full">
            <thead>
              <tr className="text-3xl text-white rounded-2xl bg-zinc-800">
                <th className="rounded-l-2xl px-4 py-2">Order Status</th>
                <th className="px-4 py-2">Ref</th>
                <th className="rounded-r-2xl px-4 py-2">Order #</th>
              </tr>
            </thead>
            {orders.map(order => (
              <PurchaseOrderListItem key={order.id} order={order} />
            ))}
          </table>
        </div>

        <div className="py-2">
          <h2 className="justify-center items-center mb-2 w-full py-3 pr-16 pl-20 text-3xl font-bold text-center text-white underline rounded-2xl bg-slate-500 max-md:px-5 max-md:max-w-full">
            Supplier Statistics
          </h2>

          <table className="table-auto w-full max-md:max-w-full text-3xl">
            <thead>
              <tr className="text-white bg-zinc-800">
                <th className="rounded-l-2xl px-4 py-2">Pending POs</th>
                <th className="px-4 py-2">Sent POs</th>
                <th className="px-4 py-2">Received POs</th>
                <th className="rounded-r-2xl px-4 py-2">Closed POs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-3xl">
                <td className="px-4 py-2">{notSentPOs}</td>
                <td className="px-4 py-2">{sentPOs}</td>
                <td className="px-4 py-2">{receivedPOs}</td>
                <td className="px-4 py-2">{closedPOs}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
}

export default PurchaseOrderList;