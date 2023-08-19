import React from "react";
import GiftImageSlider from "../../utils/GiftImageSlider";
import ThumbnailsKeenSlider from "../../utils/ThumbnailsKeenSlider";
import Gift from "../../../../public/images/festive-gift.jpg";
import MenGift from "../../../../public/images/man-gift.jpg";
import { MdLocalOffer } from "react-icons/md";
import MyDisclosure from "../../utils/Disclosure";
import {
  BiLogoInstagramAlt,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

// Components
import SimilarCategories from "../../components/SimilarCategories";
import NewsletterRibbon from "../../components/NewsletterRibbon";
import ReactStarsComp from "../../components/ReactStars";
import BottomNavigation from "../../components/BottomNavigation";

const images = [Gift, MenGift, Gift, Gift, Gift];

function GiftDetail() {
  return (
    <div className="w-full flex flex-col md:flex-col  md:px-28 pt-0 md:pt-10 space-y-10 md:space-y-10 pb-24">
      <section className="h-50vh   flex flex-col md:flex-row ">
        {/* Left side */}
        <div className=" w-full md:w-3/5 order-1 md:order-2">
          <ThumbnailsKeenSlider data={images} />
        </div>
        {/* Right side */}
        <div className=" w-full md:w-2/5 text-right px-5 pt-5 md:px-10 flex flex-col flex-nowrap space-y-4 items-end order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font">هدية ميلاد - زهرة أغسطس</h2>
          <p className="para">
            ما الذي يجعل الأغنية أغنيتك المفضلة؟ هل سمعته معًا في حفلة موسيقية؟
            هل كان يلعب في تاريخك الأول؟ أم أنه الشخص الذي لا يسعك إلا الرقص
            عليه حتى بعد كل هذه السنوات؟ مهما كان الأمر (بدون أحكام) ، فإنه
            يجعلكما على حد سواء في كل مرة
          </p>
          <div className=" border-y border-y-charcoal/20 py-2 bg-lightGray w-full flex flex-row items-center justify-end">
            <ReactStarsComp />
          </div>
          <div className="text-2xl flex flex-row flex-nowrap space-x-2">
            <span> د.ج</span>
            <p className="font-bold ">2 000</p>
          </div>
          <div className="font-light text-xs flex flex-row flex-nowrap space-x-2 items-center">
            <p>تم شراؤه أكثر من 14 مرة</p>
            <MdLocalOffer className="text-charcoal" />
          </div>
          <div className="flex flex-row space-x-3 w-full">
            <select name="" id="" className="input">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
            </select>
            <button
              type="button"
              className="border px-6 py-1 rounded-sm text-sm font-bold 
             text-coralPink hover:text-coralPinkLight hover:bg-charcoal hover:border-charcoal
             transition-all duration-150 ease-in-out whitespace-pre "
            >
              أضف إلى السلة
            </button>
          </div>
          <label id="expression" className="text-right whitespace-pre">
            : اكتب العبارة المراد كتابتها على البطاقة
          </label>
          <textarea
            type="text"
            name="expression"
            id="expression"
            className="input"
          />
          <label id="date" className="text-right whitespace-pre">
            : يوم تسليم الهدية
          </label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            className="input"
          />
          <div className="flex flex-grow" />
          <div className="border-t pt-3 border-charcoal/40">
            <div>
              <p className="text-sm text-charcoal">
                التصنيفات : الهدايا الجاهزة , هدايا الكميات , هدايا الموظف
                الجديد , هدايا اليوم الوطني , التورزيعات ,
              </p>
            </div>
            <div className="w-full flex flex-row flex-nowrap justify-end items-center space-x-2 my-4 ">
              <ul className="flex flex-row flex-nowrap justify-center space-x-4">
                <li
                  className=" rounded-full p-1 border border-charcoal/20 w-8 h-8 flex items-center justify-center
                group hover:border-coralPinkLight transition-all duration-300 ease-in-out cursor-pointer
                "
                >
                  {" "}
                  <BiLogoInstagramAlt className="text-charcoal/60 group-hover:text-coralPink  transition-all duration-300 ease-in-out" />
                </li>
                <li
                  className=" rounded-full p-1 border border-charcoal/20 w-8 h-8 flex items-center justify-center
                group hover:border-coralPinkLight transition-all duration-300 ease-in-out cursor-pointer
                "
                >
                  {" "}
                  <BiLogoFacebook className="text-charcoal/60 group-hover:text-coralPink  transition-all duration-300 ease-in-out" />
                </li>
                <li
                  className=" rounded-full p-1 border border-charcoal/20 w-8 h-8 flex items-center justify-center
                group hover:border-coralPinkLight transition-all duration-300 ease-in-out cursor-pointer
                "
                >
                  {" "}
                  <BiLogoTwitter className="text-charcoal/60 group-hover:text-coralPink  transition-all duration-300 ease-in-out" />
                </li>
                <li
                  className=" rounded-full p-1 border border-charcoal/20 w-8 h-8 flex items-center justify-center
                group hover:border-coralPinkLight transition-all duration-300 ease-in-out cursor-pointer
                "
                >
                  {" "}
                  <BiLogoYoutube className="text-charcoal/60 group-hover:text-coralPink  transition-all duration-300 ease-in-out" />
                </li>
              </ul>
              <p>: شارك المنتج </p>
            </div>
          </div>
        </div>
      </section>

      <section className="  w-full flex flex-col   md:flex-row md:space-x-10 mt-10 pt-16 px-4">
        <div className="md:w-1/2 order-2 md:order-1  ">
          <div className="">
            <h3 className="smalltitle"> هدية مصنوعة من</h3>
            <ul className=" flex flex-col space-y-2 text-right">
              <li>الورق</li>
              <li>قماش الساتان</li>
              <li>بطاقة تهادوا الوردية</li>
              <li>عطر الخزامى</li>
            </ul>
          </div>
          <div className="text-right">
            <h3 className="smalltitle"> الأبعاد</h3>
            <p>6 الطول x 2 العرض x 9.4 الإرتفاع</p>
          </div>
          <div className="text-right">
            <h3 className="smalltitle"> ملاحضات</h3>
            <p className="para">
              هذا النحت على الحائط لا يعزف الموسيقى. استخدم لأغراض الديكور فقط.
            </p>
            <p className="para">
              بمجرد تقديم طلبك ، يتم إدخاله في الإنتاج ولا يمكن استيعاب
              التغييرات والإلغاءات - نأسف ، لا استثناءات. نحن نبذل قصارى جهدنا
              لتحويل الطلبات في أسرع وقت ممكن ونتيجة لذلك ، تبدأ الطلبات في
              الإنتاج على الفور. - جميع الطلبات نهائية
            </p>
          </div>
          <div className="text-right">
            <h3 className="smalltitle"> : رمز الهدية</h3>
            <p className="text-sm ">2543</p>
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2  ">
          <MyDisclosure />
        </div>
      </section>

      <section className="h-80 py-1 bg-coralPinkLight/50 flex flex-col items-center justify-start px-4 mt-10 ">
        <p className="smalltitle">منتوجات لنفس الحرفي</p>
      </section>

      <section className="h-80 py-1 bg-coralPinkLight/50 flex flex-col items-center justify-start px-4 mt-10 ">
        <p className="smalltitle"> ربما تعجبك هاته الهدايا أيضا </p>
      </section>

      <section>
        <SimilarCategories />
        <NewsletterRibbon />
      </section>
      <BottomNavigation />
    </div>
  );
}

export default GiftDetail;
