"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Components
import ProductLy01 from "../productsLayouts/ProdcutLy01";
// import Modal from "../usables/Modal";

const ProductsLine = ({ haveLabel, data, bottomLine }) => {
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

  // Hnadle Modal
  const [showModal, setShowModal] = useState(false);
  const ShowModel = () => {
    setShowModal(true);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const CloseModalHandler = () => {
    setShowModal(false);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  const [{ occasion }] = data;
  return (
    <div className=" md:px-32 mt-5 ">
      <div
        className={`navigation-wrapper   ${
          bottomLine ? "border-b" : null
        } py-5`}
      >
        <div>
          <div className="">
            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-full h-px  my-8 bg-charcoal/20 border-0 dark:bg-gray-700" />
              <span class="absolute px-3  text-charcoal text-2xl -translate-x-1/2 bg-white left-1/2 dark:text-charcoal dark:bg-gray-900">
                {occasion}
              </span>
            </div>
            <div ref={sliderRef} className="keen-slider">
              {data.map((category) =>
                category.gifts.map((gift) => (
                  <div className="keen-slider__slide py-5 " key={gift.id}>
                    <ProductLy01
                      title={gift.title}
                      image={gift.images[0]}
                      price={gift.price}
                    />
                  </div>
                ))
              )}
            </div>
            <div className=" w-full flex flex-row items-center justify-center">
              <p
                className="whitespace-pre w-36 text-charcoal  bg-turquoise text-center  px-2 py-1
               rounded-sm hover:scale-95 transition-all ease-in-out duration-200 cursor-pointer "
              >
                عرض كل الهدايا
              </p>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
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
        )}
      </div>
      {/* {showModal ? (
        <Modal
          CloseModal={CloseModalHandler}
          picture={ProductImage}
          brandname="Comas"
          title="Bodyskin crema to soften the touch."
        />
      ) : null} */}
    </div>
  );
};

export default ProductsLine;

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
