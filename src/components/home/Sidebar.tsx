import { CategoryList } from "@/const/DummyData";
import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <div className="w-[366px] space-y-8">
      <h4 className="font-extrabold text-2xl text-[#050505]">Tìm kiếm</h4>

      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết"
          className="w-full rounded-[12px] bg-white py-6 pl-6 focus:outline-none shadow-[0px 12px 24px -4px rgba(145, 158, 171, 0.16)]"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#15AA7A] p-3 rounded-[12px]">
          <Image
            src="/images/ic-search.png"
            width={24}
            height={24}
            alt="Search"
          />
        </button>
      </div>

      <div>
        <h4 className="font-extrabold text-2xl text-[#050505]">Danh Mục</h4>
        <ul className="space-y-2 mt-6">
          {CategoryList.map((item) => (
            <li key={item.name} className="flex justify-between">
              <span className="text-[#33404A] text-lg">{item.name}</span>
              <span className="text-[#667F93] text-lg">{item.count}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 relative">
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
            className="object-cover absolute top-1/2 right-0 transform -translate-y-1/2"
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
