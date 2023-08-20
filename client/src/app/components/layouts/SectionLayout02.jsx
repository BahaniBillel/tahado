import React from "react";
import Image from "next/image";
import Gift from "../../../../public/images/wedding-gift2.jpg";

function SectionLayout02() {
  return (
    <div className=" flex flex-row justify-center md:h-screen md:py-10 bg-turquoise gap-4 ">
      <div className="flex flex-col justify-center items-end text-right pr-5 order-2  ">
        <p className="text-3xl font-semibold ">وعسى حياتك كلها سعيدة</p>

        <p className="text-sm font-light py-4">
          عسى السعادة في حياة (اسم العريس، اسم العروس) تزدهر والحظ يضحك لهما على
          طول الزمان وعرض المكان ليحققا كل الأحلام.
        </p>

        <p className="button bg-white">اكتشف الهدايا</p>
      </div>

      <div className="  overflow-hidden order-1 ">
        <Image src={Gift} />
      </div>
    </div>
  );
}

export default SectionLayout02;
