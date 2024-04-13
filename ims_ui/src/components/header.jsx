import React from "react";
import imslogo from "../assets/IMS_logo.svg"
import { MdSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { IoMdHelp } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from 'react-oidc-context';


const Header = () => {

  const {user} = useAuth();

    return (
      <div>
        <div className="flex justify-center">
            <img src={imslogo} alt="logo"
            className="bg-neutral w-full aspect-[16.29] max-md:max-w-full"
            /> </div>
        { user &&
          <div className="bg-neutral flex flex-row-reverse">
            <div className="container flex flex-row gap-1.5 px-5 py-2 bg-slate-500 max-w-[350px] ">
                <MdSettings  className="my-auto"/>
                <button>Settings</button>
                <FaUser className=" mx-auto my-auto"/>
                <button>Profile</button>
                <IoMdHelp className="my-auto"/>
                <button>Help</button>
                <FaSignOutAlt className="my-auto"/>   
                <button>SignOut</button>
            </div>
          </div>
        }
    </div>       
    );
};
export default Header;