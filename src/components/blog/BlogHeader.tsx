import Image from "next/image";
import React from "react";

function BlogHeader() {
  return (
    <section>
      <span className="text-[#0F4F9E] text-xs rounded-[8px] py-1 px-2 bg-[#E2F0FE] capitalize">
        Quản lý sản xuất
      </span>
      <h3 className="text-[#050505] text-4xl font-extrabold capitalize py-4">
        Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
      </h3>

      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="rounded-[40px] bg-white p-3">
            <Image
              src="/images/blog/logo.png"
              width={37}
              height={32}
              alt="logo"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#667F93] text-sm">Tác giả</p>
            <p className="text-[#33404A] text-base font-bold">FOSO Creator</p>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/calendar.png"
              width={20}
              height={20}
              alt="Calendar"
            />
            <span className="text-base text-[#667F93]">
              Cập nhật vào: 17/11/2022
            </span>
          </div>
          <hr className="border-r border-[#D9E1E7] h-6 mx-6" />
          <div className="flex items-center gap-2">
            <Image
              src="/images/ic-clock.png"
              width={20}
              height={20}
              alt="Clock"
            />
            <span className="text-base text-[#667F93]">10 phút đọc</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogHeader;
