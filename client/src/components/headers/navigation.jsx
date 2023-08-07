import React from "react";
// import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import {
  RiSearchEyeLine,
  RiHeart2Fill,
  RiUserFill,
  RiMenuLine,
} from "react-icons/ri";
import { IoIosBasket } from "react-icons/io";

function Navigation() {
  return (
    <div className="text-right  py-2   grid grid-cols-3 md:grid-cols-3 w-full md:px-20 place-items-center border-b border-b-charcoal/20">
      <div className=" col-span-1 place-self-end w-full">
        <ul className=" flex flex-row space-x-5 ">
          <li className="md:midLink hidden ">
            <p>سجل الدخول</p>
            <RiUserFill className="text-black h-10 cursor-pointer " />
          </li>
          <li className="md:midLink hidden ">
            <p>أعجتني</p>
            <RiHeart2Fill className="text-black h-10 cursor-pointer " />
          </li>
          <li className="midLink">
            <p className="hidden md:block">ابحث عن هدية</p>
            <RiSearchEyeLine className="text-black h-10 cursor-pointer " />
          </li>
          <li className="midLink">
            <p className="hidden md:block">السلة</p>
            <IoIosBasket className="text-black h-10 cursor-pointer " />
          </li>
        </ul>
      </div>
      <div className="col-span-1 ">
        <p className="text-2xl font-sans font-extrabold tracking-wide">
          TAHADO
        </p>
      </div>

      <div className=" hidden col-span-1  md:flex flex-row items-center place-self-end">
        <p className="text-gray-800 tracking-wide ">تهادو تحابو</p>
      </div>
      <div className="col-span-1 block md:hidden ">
        <RiMenuLine className="text-black h-10 cursor-pointer " />
      </div>
    </div>
  );
}

export default Navigation;
