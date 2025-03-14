import { CategoryList } from "@/const/DummyData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TableOfContents from "./TableOfContent";

function Sidebar() {
  return (
    <div className="w-[492px] space-y-6">
      <TableOfContents />

      <div>
        <div className="relative">
          <Image
            src="/images/box-2.png"
            width={366}
            height={650}
            alt="box 2"
            className="rounded-[40px] object-contain"
          />
          <Image
            src="/images/experience.png"
            width={366}
            height={575}
            alt="experience"
            className="object-cover absolute top-1/2 left-0 transform -translate-y-1/2"
          />
        </div>

        <div className="mt-8 relative">
          <Image
            src="/images/box-2.png"
            width={366}
            height={650}
            alt="box 2"
            className="rounded-[40px] object-contain"
          />
          <Image
            src="/images/community2.png"
            width={366}
            height={575}
            alt="experience"
            className="object-cover absolute top-[37px]"
          />
          <div>
            <p className="text-white text-xl font-bold absolute left-6 bottom-[130px]">
              Gia nhập cộng đồng FMRP Việt – <br />
              Kết nối, chia sẻ, cùng phát triển!
            </p>
            <button className="flex items-center gap-8 w-[320px] absolute left-6 bottom-[56px] border-[1.5px] px-6 py-3 border-white rounded-[40px]">
              <span className="text-white font-bold">Tham Gia Ngay</span>
              <Image
                src="/images/arrow-up-right.png"
                width={18}
                height={18}
                alt="arrow-up-right"
                className="object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
