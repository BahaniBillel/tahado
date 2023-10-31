"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { HeartIcon } from "@heroicons/react/24/solid";

import { useDispatch } from "react-redux";

import { incrementLikes, decrementLikes } from "../../../slices/basketSlice";

import { PostWishlist, RemoveWishlist } from "../../app/api/wishlistAPIs";

function ProductLy01({
  mainImage,
  giftName,
  price,
  feature,
  featureColor,
  link,
  fill,
  width,
  length,
  wishlist_id,
  user_id,
}) {
  const dispatch = useDispatch();
  const [heart, setHeart] = useState(false);

  const product = {
    mainImage,
    giftName,
    price,
    feature,
    featureColor,
    link,
  };

  const ToggleLikes = async () => {
    setHeart(!heart);

    if (!heart) {
      const likeResponse = await PostWishlist(parseInt(user_id, 10));

      if (likeResponse /* Validate Response */) {
        setHeart(true);
        dispatch(incrementLikes(product));
      }
    } else {
      const unlikeResponse = await RemoveWishlist(
        parseInt(wishlist_id, 10),
        parseInt(user_id, 10)
      );

      if (unlikeResponse) {
        setHeart(false);
        dispatch(decrementLikes({ giftName }));
      }
    }
  };

  return (
    <div className="w-80 group">
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
        <Link href={`/gift/${link}`} alt={giftName}>
          <div className="h-full overflow-hidden">
            <Image
              src={mainImage}
              alt={giftName}
              fill={fill}
              width={300}
              height={300}
            />
          </div>
        </Link>

        <div className="absolute right-5 top-5 z-40 ">
          <button onClick={ToggleLikes}>
            {heart ? (
              <HeartIcon className="h-6 text-red " />
            ) : (
              <HeartIcon className="h-6 text-lightGray " />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-row flex-nowrap text-sm space-y-3 items-center px-1">
        <p>
          {" "}
          <span>دج</span>
          <span>{price}</span>
        </p>
        <div className="flex-grow"></div>
        <p className="whitespace-pre">{giftName}</p>
      </div>
    </div>
  );
}

export default ProductLy01;
