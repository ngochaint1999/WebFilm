/** @format */
import React, { FC } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa6";
type ShareBtnProps = {
  amount: number;
};

const ShareBtn: FC<ShareBtnProps> = (props) => {
  const { amount } = props;
  return (
    <div className="flex items-center py-[25px]">
      <div className="border-r-2 border-gray">
        <span className="text-text text-[15px] mr-2.5">Chia sẻ</span>
        <span className="text-white text-[15px] mr-2.5">{amount}</span>
      </div>
      <div className="flex items-center text-2xl gap-4 ml-2.5">
        <FaFacebookF className="text-white" />
        <FaTwitter className="text-white" />
        <FaPinterestP className="text-white" />
        <FaWhatsapp className="text-white" />
      </div>
    </div>
  );
};

export default ShareBtn;
