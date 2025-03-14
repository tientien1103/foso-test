import Image from "next/image";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function Banner({ items }: BreadcrumbProps) {
  return (
    <section className="pt-[187.41px]">
      <div className="container mx-auto max-w-[1920px] relative">
        <Image
          src="/images/banner1.png"
          width={282}
          height={268}
          alt="banner 1"
          className="absolute left-0"
        />
        <Image
          src="/images/banner2.png"
          width={320}
          height={251}
          alt="banner 2"
          className="absolute -right-10"
        />
        <Image
          src="/images/bg-neon.png"
          width={282}
          height={268}
          alt="bg neon 1"
          className="absolute left-0 top-1/2"
        />
        <Image
          src="/images/bg-neon2.png"
          width={282}
          height={268}
          alt="bg neon 2"
          className="absolute right-0 translate-y-[2550px]"
        />
        <div className="relative flex flex-col items-center">
          <Breadcrumb items={items} />

          <p className="text-[64px] leading-[100px] text-[#050505] text-center font-normal z-10 tracking-[0%] mt-[64px]">
            Blog{" "}
            <span className="bg-gradient-to-r from-[#53B086] to-[#53B086]/[0.99] bg-clip-text text-transparent font-extrabold">
              FOSO
            </span>{" "}
            – <br /> Cập Nhật Tin Tức{" "}
            <span className="font-extrabold"> Mới Nhất</span>
          </p>

          <p className="text-[#33404A] leading-[150%] text-lg">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
          <div className="w-[273px] h-[28px] rounded-[40px] bg-[#A3EED6] absolute bottom-9 right-[29%]" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
