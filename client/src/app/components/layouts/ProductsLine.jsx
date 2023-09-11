"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import DefaultImage from "../../../../public/images/defaultGiftImage.jpg";
import Image from "next/image";
// Components
import ProductLy01 from "../productsLayouts/ProdcutLy01";

import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const ProductsLine = ({ lineID, data, bottomLine }) => {
  const [images, setImages] = useState([]);
  const [giftImageMap, setGiftImageMap] = useState({}); // New state to map gift_ids to their images

  const s3Client = new S3Client({
    region: process.env.NEXT_PUBLIC_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
    },
  });

  const getImages = async () => {
    console.log("Inside getImages");

    const params = {
      Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
      Prefix: "gifts_photos/",
    };

    console.log("Sending ListObjectsCommand with params:", params);

    const command = new ListObjectsCommand(params);
    const datax = await s3Client.send(command);

    console.log("Data from S3: ", datax);

    if (datax && datax.Contents) {
      const imageObjects = datax.Contents;

      let tempGiftImageMap = {};

      data.forEach((gift) => {
        const { gift_id } = gift;

        // New logic to map images to gifts by gift_id
        const giftImages = imageObjects.filter(
          (img) =>
            img.Key.startsWith(`gifts_photos/gift_${gift_id}/`) &&
            !img.Key.endsWith("/") &&
            (img.Key.toLowerCase().endsWith(".jpg") ||
              img.Key.toLowerCase().endsWith(".png")) // New condition
        );

        tempGiftImageMap[gift_id] = giftImages.map(
          (img) =>
            `https://tahadobucket.s3.eu-central-1.amazonaws.com/${img.Key}`
        );
      });

      // Save the gift-image mapping and the images
      const actualImages = imageObjects.filter(
        (obj) =>
          obj.Key.toLowerCase().endsWith(".jpg") ||
          obj.Key.toLowerCase().endsWith(".png")
      );
      setGiftImageMap(tempGiftImageMap);
      setImages(actualImages); // Only set actual images, not folder paths
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    getImages();
  }, [data]); // Dependency on 'data' so it re-runs when data changes

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 0 },
        loop: true,
        mode: "free",
      },
      "(min-width: 1360px)": {
        slides: { perView: 3.2, spacing: 20 },
        loop: true,
        mode: "free",
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // Find the object with id === 1 and get its occasion
  const occasionForId1 = "";
  console.log(images);

  return (
    <div className=" md:px-32 mt-5 ">
      <div
        className={`navigation-wrapper   ${
          bottomLine ? "border-b border-charcoal/20" : null
        } py-5`}
      >
        <div>
          <div className="">
            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-full h-px  my-8 bg-charcoal/20 border-0 dark:bg-gray-700" />
              <span
                class="absolute px-3  text-charcoal text-2xl -translate-x-1/2
               bg-white left-1/2 dark:text-charcoal dark:bg-gray-900 whitespace-pre"
              >
                {occasionForId1}
              </span>
            </div>
            <div ref={sliderRef} className="keen-slider">
              {data.map((gift) => {
                const giftImages = giftImageMap[gift.gift_id] || []; // Retrieve images for this gift
                const mainImage = giftImages[0] || DefaultImage; // Use the first image or a default
                return (
                  <div className="keen-slider__slide py-5 " key={gift.gift_id}>
                    <ProductLy01
                      giftName={gift.giftname}
                      mainImage={mainImage} // Updated to use a mapped image
                      price={gift.price}
                      link={gift.url}
                    />
                  </div>
                );
              })}
            </div>
            <div className=" w-full flex flex-row items-center justify-center">
              <p className=" button ">عرض كل {occasionForId1}</p>
            </div>
          </div>
        </div>
        {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )} */}
      </div>
    </div>
  );
};

export default ProductsLine;

// related to slider
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
