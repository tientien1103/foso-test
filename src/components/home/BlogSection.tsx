import Image from "next/image";
import React from "react";
import Blogs from "./Blogs";

function BlogSection() {
  return (
    <div className="w-[1042px] space-y-6">
      <h3 className="text-[#050505] text-4xl leading-[72px] font-extrabold">
        Tất cả bài viết
      </h3>
      <div className="relative">
        <Image
          src="/images/box.png"
          width={1042}
          height={318}
          alt="Banner Blog"
          className="rounded-[40px] object-contain"
        />
        <Image
          src="/images/community.png"
          width={472.093}
          height={399.399}
          alt="Banner Blog"
          className="object-cover absolute top-[54%] right-10 transform -translate-y-1/2"
        />
        <div>
          <p className="text-white text-4xl font-bold absolute left-[59px] top-[60]">
            Gia nhập cộng đồng <br /> FMRP – Kết nối, chia <br /> sẻ, cùng phát
            triển!
          </p>
          <button className="flex items-center gap-8 absolute left-[59px] bottom-[49px] border-2 px-6 py-3 border-white rounded-[40px]">
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

      <Blogs />
    </div>
  );
}

export default BlogSection;
