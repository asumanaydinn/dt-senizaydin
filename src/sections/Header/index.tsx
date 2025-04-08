import {
  EnvironmentOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./index.css";
const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#1a2c38] text-white px-16 py-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <PhoneOutlined />
            <span className="ml-2">+1 234 567 890</span>
          </div>

          <div className="flex items-center">
            <MailOutlined />
            <span className="ml-2">dtsenizaydın@gmail.com </span>
          </div>

          <div className="flex items-center">
            <EnvironmentOutlined />
            <span className="ml-2">Aydın, Turkey</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <InstagramOutlined />
          <YoutubeOutlined />
        </div>
      </div>
      <div className="bg-white h-24 px-16 flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full object-contain ">
            <img
              src="/assets/logo.png"
              className="w-full h-full rounded-lg object-cover"
              about="klinik"
              alt="klinik"
            />
          </div>
          <span className="text-lg">Dt. Şeniz Aydın Diş Kliniği</span>
        </div>

        <Button type="primary" className="h-12 w-52 bg-[#99906f]">
          Online Randevu
        </Button>
      </div>
    </div>
  );
};

export default Header;
