import * as React from "react";

function PurchaseOrderListItem({ purchaseOrder }) {
  return (
    <div className="flex z-10 flex-col self-center mt-0 w-full text-2xl text-center text-black max-w-[751px] max-md:max-w-full">
      <div className="shrink-0 h-0.5 border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full" />
      <div className="flex gap-5 mt-2 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between self-start">
          <img src={purchaseOrder.statusIcon} alt={purchaseOrder.status} className="shrink-0 aspect-[1.16] w-[29px]" />
          <div className="my-auto">{purchaseOrder.status}</div>
        </div>
        <div className="flex-auto">
          {purchaseOrder.supplier} (#{purchaseOrder.poNumber})
          <br />${purchaseOrder.amount}
        </div>
      </div>
    </div>
  );
}

function PurchaseOrderList({ purchaseOrders }) {
  return (
    <div className="flex flex-col max-w-[933px]">
      <header className="flex flex-col py-2.5 w-full rounded-2xl bg-stone-400 max-md:max-w-full center-content">
        <div className="flex flex-col text-center text-white max-md:max-w-full">
          <h2 className="items-center pt-4 pr-16 pb-2 pl-20 text-3xl font-bold underline rounded-2xl bg-slate-500 max-md:px-5 max-md:max-w-full">
            PO List
          </h2>
          <div className="flex gap-5 px-16 py-3.5 mt-3.5 text-3xl rounded-2xl bg-zinc-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div>Status</div>
            <div className="flex-auto">Total / PO#</div>
            <div>Options</div>
          </div>
        </div>
        <div className="z-10 px-px mt-3.5 ml-5 max-w-full w-[543px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-2xl text-center text-black whitespace-nowrap max-md:mt-10">
                <div className="flex gap-3.5">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d177a5fd23807674813a221165714ef3f978c56e96671d25a8497b82aebfecca?apiKey=cc278bcd51f44b949681fbf76d96752a&" alt="Received icon" className="shrink-0 w-8 aspect-square" />
                  <div className="my-auto">Received</div>
                </div>
                <div className="flex gap-5 justify-between mt-7">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4192a77b47af6e41b072cb773300309d81de01e42ab854ab84bb816d066474a?apiKey=cc278bcd51f44b949681fbf76d96752a&" alt="Sent icon" className="shrink-0 aspect-square w-[30px]" />
                  <div>Sent</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl text-center text-black max-md:mt-10">
                <div>
                  Supplier 1 (#505)
                  <br />
                  $100.00
                </div>
                <div className="mt-5">
                  Supplier 2 (#305)
                  <br />
                  $50.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-end mt-0 max-w-full text-center text-black w-[179px] max-md:mr-2.5">
          <div className="flex gap-5 text-2xl">
            <div className="flex-auto">Options</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/60cea056d787aa10d7e6b36f84601f01e64f4ee2b7ac7859165c8023fca471a2?apiKey=cc278bcd51f44b949681fbf76d96752a&" alt="Options icon" className="shrink-0 my-auto aspect-[1.56] fill-zinc-800 w-[25px]" />
          </div>
          <div className="px-12 pt-2.5 pb-4 mt-3 text-xl font-bold rounded-2xl bg-slate-500 max-md:px-5">
            View
            <br />
            Edit
            <br />
            Delete
          </div>
        </div>
        {purchaseOrders.map((purchaseOrder) => (
          <PurchaseOrderListItem key={purchaseOrder.poNumber} purchaseOrder={purchaseOrder} />
        ))}
      </header>
      <section className="flex flex-col pt-2.5 pb-4 mt-6 w-full rounded-2xl bg-stone-400 max-md:max-w-full">
        <h2 className="justify-center items-center py-3 pr-16 pl-20 text-3xl font-bold text-center text-white underline rounded-2xl bg-slate-500 max-md:px-5 max-md:max-w-full">
          Supplier Statistics
        </h2>
        <div className="flex gap-5 justify-between mt-5 text-2xl max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col self-start">
            <div className="flex flex-col px-7 text-black max-md:px-5">
              <div className="self-center">Total Value:</div>
              <div className="mt-9">Not Sent POs:</div>
              <div className="mt-7">Sent POs:</div>
              <div className="mt-7">Received POs:</div>
            </div>
            <div className="mt-6 text-zinc-800">Total Number of POs:</div>
          </div>
          <div className="flex flex-col items-center mt-1 text-black whitespace-nowrap">
            <div className="self-stretch">$21,450.00</div>
            <div className="mt-6">3</div>
            <div className="mt-8">3</div>
            <div className="mt-8">3</div>
            <div className="mt-7">6</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const purchaseOrders = [
    {
      status: "Not Sent",
      statusIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17862292ecebe071e6d620b43fe3762dbd0ecd41da9383bfb9dd23c77b26e510?apiKey=cc278bcd51f44b949681fbf76d96752a&",
      supplier: "Supplier 3",
      poNumber: "200",
      amount: 150.0,
    },
  ];

  return <PurchaseOrderList purchaseOrders={purchaseOrders} />;
}