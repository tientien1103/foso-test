import Image from "next/image";
import React from "react";

const SocialList = ["ic-zalo", "ic-fb", "ic-x", "ic-linked", "ic-reddis"];

function ShareSection() {
  return (
    <div className="fixed left-[90px] top-80">
      <h3 className="text-[#33404A] font-extrabold text-base mb-2">Chia sẻ</h3>
      <div className="flex flex-col gap-2">
        {SocialList.map((icon) => (
          <div
            key={icon}
            className="border border-[#15AA7A] py-3 pl-3 pr-2.5 rounded-[16px]"
          >
            <Image
              width={24}
              height={24}
              alt={icon}
              src={`/images/blog/${icon}.png`}
              className="object-contain translate-x-0.5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShareSection;
