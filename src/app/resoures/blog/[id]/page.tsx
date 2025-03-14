import BlogContent from "@/components/blog/BlogContent";
import Sidebar from "@/components/blog/Sidebar";
import Breadcrumb from "@/components/common/Breadcrumb";
import BlogCard from "@/components/blog/BlogCard";
import { BlogList } from "@/const/DummyData";
import React from "react";

function DetailPage() {
  const breadcrumb = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài nguyên", href: "/resoures" },
    { label: "Blog", href: "/resoures/blog" },
    { label: "Quản lý sản xuất" },
  ];
  return (
    <section className="py-[135px] bg-[#f2f4f5]">
      <div className="container mx-auto max-w-[1440px]">
        <Breadcrumb items={breadcrumb} />
        <div className="flex gap-8">
          <BlogContent />
          <Sidebar />
        </div>
        <div className="mt-12">
          <h3 className="text-4xl text-[#050505] font-extrabold leading-[72px] ">
            Bài viết liên quan
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 space-y-12">
            {BlogList.slice(0, 3).map((item, index) => (
              <BlogCard item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
