import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import Sidebar from "@/components/home/Sidebar";

export default function Home() {
  const breadcrumb = [{ label: "Trang chủ" }];
  return (
    <main className="w-full min-h-screen bg-[#f2f4f5] overflow-hidden">
      <Banner items={breadcrumb} />
      <section className="pt-24 pb-32">
        <div className="container max-w-[1440px] mx-auto">
          <div className="flex gap-8">
            <BlogSection />
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
