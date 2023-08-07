"use client";
import React, { useState } from "react";

import { RiArrowUpSFill } from "react-icons/ri";
import { links } from "./MyLinks";
import Link from "next/link";
import Image from "next/image";
import saying01 from "../../../public/images/saying01.jpg";

function MiddleHeader() {
  const [heading, setHeading] = useState(false);
  const [subHeading, setSubHeading] = useState("");

  const CheckHover = () => {
    setLink(!link);
  };

  return (
    <div className="w-screen  md:px-20 flex flex-col  space-y-12 place-items-center mt-10  ">
      <div className="row-span-1 w-full  text-center  overflow-hidden h-44">
        <Image src={saying01} alt="/" />
      </div>
      <div className="row-span-1 w-full md:w-3/5 px-10 ">
        <input
          type="text"
          className="border border-charcoal/20 w-full outline-none bg-gray-100 rounded-sm text-right pr-3 py-2 bg-turquoise/20 "
          placeholder=" ...ابحث عن هدية "
        />
      </div>
      <div className="row-span-1 flex flex-row w-full overflow-x-auto justify-center space-x-16  py-5">
        {links.map((link, i) => (
          <div key={link.name} className="navOption group">
            <Link href={`/gifts${link.page}`}>
              <div className="overflow-hidden rounded-full w-36 h-36">
                <Image src={link.image} alt="/" />
              </div>
              <h1
                className="text-gray-800 text-sm group-hover:underline my-2 cursor-pointer"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiddleHeader;
