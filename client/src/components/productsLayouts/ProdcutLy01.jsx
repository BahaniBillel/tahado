"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
// import { useDispatch } from "react-redux";
import { HeartIcon } from "@heroicons/react/24/solid";
// import { incrementLikes, decrementLikes } from "../../redux/slices/basketSlice";

function ProductLy01({
  image,
  title,
  price,
  feature,
  featureColor,
  // QuickViewHandler,
  link,
  fill,
  width,
  length,
}) {
  //   const dispatch = useDispatch();
  const [heart, setHeart] = useState(false);
  //   const HandleHeartLikes = () => {
  //     setHeart(!heart);

  //     const product = {
  //       image,
  //       title,
  //       subtitle,
  //       price,
  //       feature,
  //       featureColor,
  //     };
  //     if (!heart) {
  //       dispatch(incrementLikes(product));
  //     } else {
  //       dispatch(decrementLikes({ name }));
  //     }
  //   };

  return (
    <div className="w-80">
      <div
        className={` ${"w-80" || width}  ${
          "h-80" || length
        }  group  border border-charcoal/20 hover:shadow-lg p-2 relative rounded-sm 
    hover:-translate-y-1 transition-all duration-150 ease-in-out cursor-pointer`}
      >
        {feature ? (
          <span
            className={`absolute -left-1 top-1 text-xs font-light px-3 py-1 ${featureColor}  bg-black text-white rounded-r-xl`}
          >
            {feature}
          </span>
        ) : null}
        <Link href={`/listing/${link}`}>
          <div className="h-full overflow-hidden">
            <Image src={image} alt={title} fill={fill} />
          </div>
        </Link>

        <div className="absolute right-5 top-5 z-40 ">
          <button>
            {heart ? (
              <HeartIcon className="h-6 text-red " />
            ) : (
              <HeartIcon className="h-6 text-lightGray " />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap text-sm space-y-3 items-center ">
        <p>
          {" "}
          <span>دج</span>
          <span>{price}</span>
        </p>
        <div className="flex-grow"></div>
        <p className="whitespace-pre">{title}</p>
      </div>
    </div>
  );
}

export default ProductLy01;
