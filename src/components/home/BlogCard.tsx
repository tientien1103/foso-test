import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface BlogItem {
  id: number;
  title: string;
  date: string;
  time: string;
  tag: string[];
  image: string;
}

function BlogCard({ item }: { item: BlogItem }) {
  return (
    <li
      key={`blog - ${item.id}`}
      className="h-[693px]  group transition-all duration-300 ease-in-out hover:-translate-y-2"
    >
      <Link href={`/resoures/blog/1`}>
        <Image
          src={item.image}
          width={459}
          height={429}
          alt="Blog Thumbnail"
          className="rounded-[24px] object-contain w-full h-[475px]"
        />
      </Link>
      <div className="pt-6">
        {item.tag.map((tag, index) => (
          <span
            key={`${tag}-${item.id}-${index + 2}`}
            className="text-[#0F4F9E] text-xs rounded-[8px] py-1 px-2 bg-[#E2F0FE]"
          >
            {tag}
          </span>
        ))}
        <Link href={`/resoures/blog/1`}>
          <h4 className="text-[#33404a] font-extrabold text-2xl leading-[36px] mt-4">
            {item.title}
          </h4>
        </Link>
        <div className="flex items-center mt-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/calendar.png"
              width={20}
              height={20}
              alt="Calendar"
            />
            <span className="text-base text-[#667F93]">{item.date}</span>
          </div>
          <hr className="border-r border-[#D9E1E7] h-6 mx-3" />
          <div className="flex items-center gap-2">
            <Image
              src="/images/ic-clock.png"
              width={20}
              height={20}
              alt="Clock"
            />
            <span className="text-base text-[#667F93]">{item.time}</span>
          </div>
        </div>
      </div>
      <Link
        href="/resoures/blog/1"
        className="flex items-center py-2 gap-4 mt-4"
      >
        <p className="text-[#667F93] text-lg font-semibold">Khám phá thêm</p>
        <Image
          src="/images/arrow-right.png"
          width={24}
          height={24}
          alt="Arrow Right"
        />
      </Link>
    </li>
  );
}

export default BlogCard;
