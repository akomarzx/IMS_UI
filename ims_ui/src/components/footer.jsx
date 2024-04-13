import * as React from "react";
import { PiCopyrightBold } from "react-icons/pi";

function Footer(props) {
  return (
    <div className="flex flex-col mb-0 mt-10 items-center px-16 pt-6 pb-1.5 w-full text-center bg-zinc-800 text-stone-400 w-full max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[489px]">
        <div className="text-3xl font-bold max-md:max-w-full">
          <div className="text-sm text-stone-400">
           <button><h6>  About  -</h6></button> 
            <button><h6>-  FAQs  -</h6></button> 
              <button><h6>-  Services  -</h6></button>  
            <button><h6>-  Team  -</h6></button> 
           <button><h6>-  Contact  </h6></button> 
          </div>
        </div>
        <div className="flex gap-0 self-center mt-3.5">
          <div className="justify-center items-center self-start w-3.5 h-3.5 text-xs whitespace-nowrap bg-zinc-800 border-stone-400">
          <PiCopyrightBold />
          </div>
          <div className="flex-auto text-xs">
            <p>{props.year} - IMS | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer