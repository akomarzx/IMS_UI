import React, { useState, useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

function AccountSummary({ account }) {
  //Dynamically create table body (purchase order information)
  //Using w-full etc to set div/element size relative to container (w-11/12 is 11/12 of the container width, etc.)
  //Using max-md:max-w-full to set the container width to full width on mobile devices
  return (
    <tbody>
      <tr className="text-center text-2xl">
        <td className="px-4 py-2">{account?.id}</td>
        <td className="px-4 py-2">{account?.label}</td>
        <td className="px-4 py-2">{account?.email}</td>
        <td className="px-4 py-2">{new Date(account?.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
      </tr>
      <tr>
        <td colSpan='8'>
          <div className="shrink-0 h-0.5 border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full w-11/12 mx-auto"></div>
        </td>
      </tr>
    </tbody>

  );
}


const SupplierList = () => {

  let baseServiceUrl = "https://ronaldjro.dev"
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`${baseServiceUrl}/api/v1/account?type=vendor`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch accounts');
          }
          return response.json();
        })
        .then(data => {
          setAccounts(data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [user]);

  return (
    <header className="flex flex-col py-2.5 center-content w-screen-xl rounded-2xl bg-stone-400 max-md:max-w-full">
      <div className="px-7 flex flex-col w-screen-xl max-md:max-w-full">
        <div className="py-2">
          <h1 className="items-center text-center mb-2 pt-4 pr-16 pb-2 pl-20 text-3xl font-bold underline text-white rounded-2xl bg-slate-500 max-md:px-5 max-md:max-w-full">
            Supplier Accounts
          </h1>
          <table className="table-auto w-full max-md:max-w-full">
            <thead>
              <tr className="text-3xl text-white rounded-2xl bg-zinc-800">
                <th className="rounded-l-2xl px-4 py-2">Id</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="rounded-r-2xl px-4 py-2">Date Created</th>
              </tr>
            </thead>
            {accounts.map(account => (
              <AccountSummary key={account.id} account={account} />
            ))}
          </table>
        </div>
        <div className='flex justify-center mt-3.5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => navigate('/addSupplier')}>Add Supplier</button>
        </div>
      </div>
    </header>
  );
};

export default SupplierList;
