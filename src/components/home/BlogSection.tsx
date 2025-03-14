"use client";

import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";

function BlogSection({ currentItems }: any) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 space-y-10">
      <div className="relative w-full max-w-[1042px] mx-auto space-y-6">
        <h3 className="text-[#050505] text-4xl leading-[72px] font-extrabold">
          Tất cả bài viết
        </h3>

        <div className="relative rounded-[40px] overflow-hidden">
          <Image
            src="/images/box.png"
            width={1042}
            height={318}
            alt="Banner Blog"
            className="rounded-[40px] object-cover w-full h-auto"
          />
          <Image
            src="/images/community.png"
            width={472.093}
            height={399.399}
            alt="Community"
            className="object-cover absolute top-1/2 right-10 transform -translate-y-[47%]"
          />
          <div className="absolute left-[59px] top-[15%] space-y-6">
            <p className="text-white text-4xl font-bold leading-snug">
              Gia nhập cộng đồng <br /> FMRP – Kết nối, chia <br /> sẻ, cùng
              phát triển!
            </p>
            <button className="flex items-center gap-4 border-2 px-6 py-3 border-white rounded-[40px] hover:bg-white hover:text-black transition">
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

      <div className="w-full max-w-[1042px] mx-auto space-y-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {(currentItems ?? []).map((item: any, index: number) => (
            <BlogCard key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogSection;
