import { EnvelopeIcon } from "@heroicons/react/20/solid";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex items-center space-x-8">
      <div
        className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900
    flex items-center justify-center flex-col"
      >
        <EnvelopeIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
      </div>
      <div>
        <h1 className="text-lg sm:text-xl text-white font-bold">Email</h1>
        <h1 className="text-base sm:text-lg text-white text-opacity-70">
          イーメール書く！
        </h1>
      </div>
    </div>
  );
};

export default ContactInfo;
