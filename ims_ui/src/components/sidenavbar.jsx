import * as React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineInventory } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SideNavBar = () => {
  return (
    <div className="bg-slate-300 overflow-x-auto relative w-64 bottom-0 left-0 pt-[64px]">
      <div className="flex flex-row gap-2 text-xl items-center justify-center font-bold bg-slate-300 text-zinc-800">
        <FaUserCircle className="my-auto" /> Admin (Signed in)    </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="p-4">
          <li className="py-2">{/*replace all the [a href = "#"] values to the correct path to open different pages*/}
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-xl font-bold hover:bg-slate-800  hover:text-white px-4 rounded-lg">
                <MdSpaceDashboard className="my-auto"/>Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-xl font-bold hover:bg-slate-800  hover:text-white mt-4 px-4 rounded-lg">
              <HiUsers className="my-auto" /> Accounts
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-lg font-semibold hover:bg-slate-800 hover:text-white px-6 py-2">
              <FaAngleDoubleRight className="my-auto" /> Customer List
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-lg font-semibold hover:bg-slate-800  hover:text-white px-6 py-2">
              <FaAngleDoubleRight className="my-auto" /> Supplier List
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-xl font-bold hover:bg-slate-800  hover:text-white mt-4 px-4 rounded-lg">
              <MdOutlineInventory className="my-auto" />Inventory
            </Link>
          </li>
          <li>
            <Link to="/inventory" className="flex flex-row gap-2 text-zinc-800 text-lg font-semibold hover:bg-slate-800  hover:text-white px-6 py-2">
              <FaAngleDoubleRight className="my-auto" /> Inventory List
            </Link>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-xl font-bold hover:bg-slate-800  hover:text-white mt-4 px-4 rounded-lg">
                <MdOutlineInventory className="my-auto" />Inventory
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-lg font-semibold hover:bg-slate-800 hover:text-white px-6 py-2">
              <FaAngleDoubleRight className="my-auto" /> Categories
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-lg font-semibold hover:bg-slate-800 hover:text-white px-6 py-2">
              <FaAngleDoubleRight className="my-auto" /> Warehouse Locations
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-xl font-bold hover:bg-slate-800 hover:text-white mt-4 px-4 rounded-lg">
                <MdBorderColor className="my-auto" /> Orders
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-lg font-semibold hover:bg-slate-800 hover:text-white px-6 py-2">
              <FaAngleDoubleRight className="my-auto" /> Sales Orders
            </a>
          </li>
          <li>
            <Link to="/purchaseOrderList" className="flex flex-row gap-2 text-zinc-800 text-lg font-semibold hover:bg-slate-800 hover:text-white px-6 py-2">
              <FaAngleDoubleRight className="my-auto" />Purchase Orders
            </Link>
          </li>
          <li>
            <a href="#" className="flex flex-row gap-2 text-zinc-800 text-xl font-bold hover:bg-slate-800 hover:text-white mt-4 px-4 rounded-lg">
                <TbReportSearch className="my-auto" /> Reports
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideNavBar;




