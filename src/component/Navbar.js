import React, { useState } from "react";
import img from '../images/SharedScreenshot.png';
import {FiMenu} from "react-icons/fi";
import {RxCross2} from 'react-icons/rx';
import {BsSun} from 'react-icons/bs';
import {MdModeNight} from 'react-icons/md';

 const Navbar =({daynight,setDaynight}) => {
  const [showOptions, setShowOptions] = useState(false);


  const tabclick = () => {
    setShowOptions(!showOptions);
  }

  const dayicon = () =>{
    setDaynight(!daynight);
  }

  return (
    <div className={`top-0 left-0 right-0 md:p-2 px-8 py-2 sticky ${daynight ? "bg-[#EDF2F7]" : "bg-[#12141c]" }`}>
      <div className="flex flex-row justify-between items-center md:w-[95%] md:mx-auto">
        {/* logo starts here */}
        <div className="">
          <img src={img} alt="logo" className="w-12" />
        </div>
        {/* logo ends here */}

        {/* links start here */}
        <div className="md:block hidden">
          <ul className={`flex gap-[2.1rem] font-semibold text-[1.1rem] cursor-pointer items-center ${daynight ? "text-black" : "text-white"}`}>
            <li className="inline">
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                About
              </a>
            </li>
            <li>
              <a href="#">
                Projects
              </a>
            </li>
            <li>
              <a href="#">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className={`border rounded-lg p-3 ${daynight ? "border-black" : "default"}`}>
                Resume
              </a>
            </li>
            <li>
                {daynight ? < MdModeNight onClick={dayicon} className="text-2xl"/> : < BsSun onClick={dayicon} className="text-2xl"/>}     
            </li>
          </ul>
        </div>
        {/* links ends here */}

        {/* icon when display view is short start here */}
        <div className="md:hidden block cursor-pointer" onClick={tabclick}>
            {showOptions ? <RxCross2 className="text-3xl"/>  : <FiMenu className="text-3xl"/> }
        </div>
        {/* end here icon  */}
      </div>

      {/* Options in tabular form */}
      {showOptions && (
        <div className="md:hidden block mt-5 text-center">
          <ul className="font-semibold text-[1.1rem] py-2">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li className="my-2 bg-gray-200 py-2">
              <a href="#">About</a>
            </li>
            <li className="my-2 ">
              <a href="#">Projects</a>
            </li>
            <li className="mb-5 bg-gray-200 py-2">
              <a href="#">Contact</a>
            </li>
            <li className="">
              <a href="#" className="border rounded-lg p-3 border-black">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar;
