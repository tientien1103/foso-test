"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
  children?: TocItem[];
}

const data: TocItem[] = [
  { id: "section-1", title: "1. Quy trình 5S là gì?" },
  { id: "section-2", title: "2. Lợi ích quy trình 5S đem lại" },
  {
    id: "section-3",
    title: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
    children: [
      { id: "section-3-1", title: "3.1 Cải thiện rõ nét môi trường làm việc" },
      { id: "section-3-2", title: "3.2 Tiết kiệm thời gian đáng kể" },
      { id: "section-3-3", title: "3.3 Tăng năng suất làm việc" },
      { id: "section-3-4", title: "3.4 Tiết kiệm chi phí" },
      { id: "section-3-5", title: "3.5 Tăng chất lượng sản phẩm" },
    ],
  },
  {
    id: "section-4",
    title: "4. Quy trình 5S gồm các bước:",
    children: [
      { id: "section-4-1", title: "4.1 Seiri (Ngăn nắp)" },
      { id: "section-4-2", title: "4.2 Seiton (Sắp xếp)" },
      { id: "section-4-3", title: "4.3 Seiso (Vệ sinh)" },
      { id: "section-4-4", title: "4.4 Seiketsu (Tiêu chuẩn hóa)" },
      { id: "section-4-5", title: "4.5 Shitsuke (Kỷ luật)" },
    ],
  },
  {
    id: "section-5",
    title: "5. Quy trình được thực hiện như sau:",
    children: [
      { id: "section-5-1", title: "5.1 Giai đoạn chuẩn bị" },
      { id: "section-5-2", title: "5.2 Triển khai rộng rãi" },
      {
        id: "section-5-3",
        title: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
      },
      { id: "section-5-4", title: "5.4 Sàng lọc, sắp xếp và đánh giá" },
      { id: "section-5-5", title: "5.5 Đánh giá" },
    ],
  },
  { id: "section-6", title: "6. Quy trình 5S có giống với Kaizen?" },
  { id: "section-7", title: "7. Đối tượng nào nên áp dụng 5S?" },
  {
    id: "section-8",
    title: "8. Các yếu tố tạo nên thành công cho quy trình 5S",
  },
];

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>("");

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleClick = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="p-4">
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={toggleOpen}
      >
        <h2 className="font-semibold text-lg">Nội Dung Bài Viết</h2>
        {isOpen ? (
          <ChevronUp size={24} color="#15AA7A" />
        ) : (
          <ChevronDown size={24} color="#15AA7A" />
        )}
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mt-4 space-y-2">
          {data.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`text-sm text-left w-full ${
                  activeId === item.id
                    ? "text-[#15AA7A] font-bold"
                    : "text-[#33404A] hover:text-[#15AA7A] hover:font-bold"
                }`}
              >
                {item.title}
              </button>
              {item.children && (
                <ul className="pl-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <button
                        onClick={() => handleClick(child.id)}
                        className={`text-sm text-left w-full ${
                          activeId === child.id
                            ? "text-[#15AA7A] font-bold"
                            : "text-[#33404A] hover:text-[#15AA7A] hover:font-bold"
                        }`}
                      >
                        {child.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
