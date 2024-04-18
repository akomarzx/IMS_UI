import imslogo from "../assets/imslogo.svg"
import React from "react";
import { MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { IoMdHelp } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from 'react-oidc-context';


const Header = () => {

  const { user, signoutSilent } = useAuth();


  return (
    <div className="w-full mt-0 mb-10">
      <div className="flex justify-center">
        <img src={imslogo} alt="logo"
          className="bg-neutral w-full aspect-[16.29] max-md:max-w-full"
        />
      </div>
      <div className="bg-neutral flex flex-row-reverse">
        <div className="container absolute flex flex-row gap-1.5 px-5 py-2 bg-slate-300 max-w-[350px] ">
          <MdSettings className="my-auto" />
          <button className="hover:bg-slate-800 hover:text-white">Settings</button>
          <FaUser className=" mx-auto my-auto" />
          <button className="hover:bg-slate-800 hover:text-white">Profile</button>
          <IoMdHelp className="my-auto" />
          <button className="hover:bg-slate-800 hover:text-white">Help</button>
          <FaSignOutAlt className="my-auto" />
          <button className="hover:bg-slate-800 hover:text-white" onClick={signoutSilent}>SignOut</button>
        </div>
      </div>
    </div>
  );

};
export default Header;