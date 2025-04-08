import React from "react";

const Intro = () => {
  return (
    <div className="bg-[#ebebec] h-[640px] flex items-center justify-center gap-24 px-16">
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-center text-[#1a2c38]">
          Sağlıklı Gülüşünüz İçin <br /> Uzman Kadromuzla Hizmetinizdeyiz.
        </span>
      </div>
      <div className="w-96 h-96 rounded-full object-contain ">
        <img
          src="/assets/klinik.jpg"
          className="w-full h-full rounded-lg object-cover"
          about="klinik"
          alt="klinik"
        />
      </div>
    </div>
  );
};

export default Intro;
