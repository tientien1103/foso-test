"use client";
import { reactions } from "@/const/DummyData";
import Image from "next/image";
import React, { useState } from "react";

const FeedbackReaction = () => {
  const [selected, setSelected] = useState("");

  return (
    <div
      className="w-full bg-white rounded-[24px] py-6 space-y-4"
      style={{
        boxShadow:
          "0px 1px 3px 0px rgba(18, 18, 23, 0.10), 0px 1px 2px 0px rgba(18, 18, 23, 0.06)",
      }}
    >
      <div className="text-center font-semibold">
        Bạn thấy bài viết như thế nào?
      </div>
      <div className="text-center text-gray-500">
        {reactions.reduce((acc, cur) => acc + cur.count, 0)} phản hồi
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {reactions.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-[4px] border w-[95px] ${
              selected === item.id ? "border-[#10805B]" : "border-transparent"
            } hover:bg-gray-100 transition-all`}
          >
            <Image
              src={`/images/blog/emoji/${item.icon}`}
              width={48}
              height={48}
              alt={item.label}
              className="object-cover"
            />
            <span className="text-base text-[#33404A] font-bold">
              {item.count}
            </span>
            <span className="text-sm text-[#33404A]">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedbackReaction;
