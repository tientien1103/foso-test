"use client";
import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import Pagination from "@/components/home/Pagination";
import Sidebar from "@/components/home/Sidebar";
import { BlogList } from "@/const/DummyData";
import { useState } from "react";

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(BlogList.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = BlogList.slice(startIndex, endIndex);
  const breadcrumb = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài nguyên", href: "/resoures" },
    { label: "Blog" },
  ];
  return (
    <main className="w-full min-h-screen bg-[#f2f4f5] overflow-hidden">
      <Banner items={breadcrumb} />
      <section className="pt-24 pb-10">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex gap-8">
            <BlogSection currentItems={currentItems} />
            <Sidebar />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
}
