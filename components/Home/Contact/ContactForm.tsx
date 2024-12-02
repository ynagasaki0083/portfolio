import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className=" pt-4 text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        連絡先はこちら
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        j なんやかんや書く
      </p>
      {/* Input Fields */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="苗字"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
            border-gray-200 border-opacity-15 outline-none"
          />
          <input
            type="text"
            placeholder="名前"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
            border-gray-200 border-opacity-15 outline-none"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="E-Mail"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
            border-gray-200 border-opacity-15 outline-none"
          />
          <input
            type="text"
            placeholder="電話番号"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px]
            border-gray-200 border-opacity-15 outline-none"
          />
        </div>
        <textarea
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600  px-4 pt-3.5 rounded-md border-[1.5px]
            border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="本文"
        ></textarea>
      </form>
    </div>
  );
};

export default ContactForm;