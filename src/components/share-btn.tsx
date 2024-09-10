/** @format */
"use client";
import { domain } from "@/constants";
import { usePathname } from "next/navigation";
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

export const socialsShare = [
  {
    platform: "Facebook",
    icon: <FaFacebookF className="text-white" />,
    color: "#1877f2",
    baseHref: "https://www.facebook.com/dialog/share?app_id=87741124305&href=",
  },
  {
    platform: "Twitter",
    icon: <FaTwitter className="text-white" />,
    color: "#000",
    baseHref: "https://twitter.com/intent/tweet?text=",
  },
  {
    platform: "Pinterest",
    icon: <FaPinterestP className="text-white" />,
    color: "#35465c",
    baseHref: "https://www.pinterest.com/pin/create/button/?url=",
  },
  {
    platform: "Whatsapp",
    icon: <FaWhatsapp className="text-white" />,
    color: "#0077b5",
    baseHref: "https://api.whatsapp.com/send?text=",
  },
];

const ShareBtn: FC<ShareBtnProps> = (props) => {
  const { amount } = props;
  const pathname = usePathname();
  return (
    <div className="flex items-center py-[25px]">
      <div className="border-r-2 border-gray">
        <span className="text-text text-[15px] mr-2.5">Chia sẻ</span>
      </div>
      <div className="flex items-center text-2xl gap-4 ml-2.5">
        {socialsShare.map((social) => (
          <button
            key={social.platform}
            onClick={() =>
              window.open(
                social.baseHref + encodeURIComponent(domain + pathname)
              )
            }
            rel="noopener noreferrer"
          >
            {social.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShareBtn;
