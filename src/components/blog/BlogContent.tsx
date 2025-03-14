import React from "react";
import BlogHeader from "./BlogHeader";
import Image from "next/image";
import { ContentList } from "@/const/DummyData";
import FeedbackReaction from "./FeedbackReaction";

function BlogContent() {
  return (
    <div className="w-[900px] space-y-6 mt-6">
      <BlogHeader />
      <section>
        <div className="flex items-center flex-col gap-2">
          <Image
            src="/images/blog/blog1.png"
            width={900}
            height={600}
            alt="Blog Content 1"
            className="rounded-[8px] object-contain"
          />
          <p className="text-[#667F93] text-base">Quy trình 5s là gì?</p>
        </div>
        <div className="relative">
          <span className="text-[#15aa7a] text-[100px] absolute top-0 left-0 transform -translate-y-9">
            ❝
          </span>
          <p className="text-[#33404A] text-xl py-6 text-center px-[55px]">
            Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây
            dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn
            thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công
            của quy trình bạn nhé.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-[#15AA7A] text-xl font-bold" id="section-1">
            1. Quy trình 5S là gì?
          </h3>
          <p className="text-[#231F20] text-base">
            Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
            xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật
            Bản. {" "}
          </p>
          <ul className="list-inside text-[#231F20] text-base">
            Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
            dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S
            đầu trong tiếng Nhật:
            <li className="mt-6">
              <span className="text-[#15AA7A] font-bold ml-2">· Seiri </span>
              (Ngăn nắp)
            </li>
            <li>
              <span className="text-[#15AA7A] font-bold ml-2">· Seiso </span>
              (Sạch sẽ)
            </li>
            <li>
              <span className="text-[#15AA7A] font-bold ml-2">· Seiton </span>
              (Trật tự)
            </li>
            <li>
              <span className="text-[#15AA7A] font-bold ml-2">· Shitsuke </span>
              (Kỷ luật)
            </li>
            <li>
              <span className="text-[#15AA7A] font-bold ml-2">· Seiketsu </span>
              (Tiêu chuẩn hóa)
            </li>
          </ul>
          <h3 className="text-[#15AA7A] text-xl font-bold" id="section-2">
            2. Lợi ích quy trình 5S đem lại 
          </h3>

          <p className="text-[#231F20] text-base">
            Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi
            bước của quy trình với mục đích cải tiến môi trường làm việc của
            doanh nghiệp.
          </p>
          <p className="text-[#231F20] text-base">
            Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp
            sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi
            làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt
            theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
          </p>
          <p className="text-[#231F20] text-base">
            Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen
            tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn
            hóa doanh nghiệp tích cực.
          </p>
        </div>
      </section>

      <section>
        {ContentList.map((item) => (
          <div key={item.id}>
            <div className="flex items-center flex-col gap-2 mb-6">
              <Image
                src={`/images/blog/blog${item.id}.png`}
                width={900}
                height={600}
                alt="Blog Content 1"
                className="rounded-[8px] object-contain"
              />
              <p className="text-[#667F93] text-base">{item.title}</p>
            </div>
            <div className="space-y-6">
              <h3
                className="text-[#15AA7A] text-xl font-bold"
                id={`section-${item.id}`}
              >
                {item.id}. {item.title}
              </h3>
              <p className="text-[#231F20] text-base">{item.description}</p>
            </div>

            {item.content.map((content, i) => (
              <div key={content.subTitle} className="mt-6">
                <h3
                  className="text-[#15AA7A] text-xl font-bold"
                  id={`section-${item.id}-${i + 1}`}
                >
                  {content.subTitle}
                </h3>
                <p className="text-[#231F20] text-base mb-6">
                  {content.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section>
        <div className="space-y-6">
          <h3 className="text-[#15AA7A] text-xl font-bold" id="section-6">
            6. Quy trình 5S có giống với Kaizen?
          </h3>
          <p>
            Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
            không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa
            chúng có mối quan hệ chặt chẽ với nhau.
          </p>

          <p className="border-l-[3px] border-[#15AA7A] pl-9 pr-16 text-[#33404A] text-xl">
            Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong
            doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang
            tính liên tục và bền vững.
          </p>

          <p className="border-l-[3px] border-[#15AA7A] pl-9 pr-16 text-[#33404A] text-xl">
            Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
            trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt,
            tiêu chuẩn hóa và kỷ luật trong môi trường làm việc.
          </p>

          <p className="text-[#231F20] text-base">
            Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc
            này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc
            sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên
            trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra
            một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo. 
          </p>
        </div>
      </section>

      <section>
        <div className="space-y-6">
          <h3 className="text-[#15AA7A] text-xl font-bold" id="section-7">
            7. Quy trình 5S có giống với Kaizen?
          </h3>
          <p className="text-[#231F20] text-base">
            Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở
            nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy
            nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ
            quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
          </p>
          <p className="text-[#231F20] text-base">
            Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp,
            các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu
            quả.
          </p>

          <div className="flex items-center flex-col gap-2 mb-6">
            <Image
              src={`/images/blog/blog7.png`}
              width={900}
              height={600}
              alt="Blog Content 1"
              className="rounded-[8px] object-contain"
            />
            <p className="text-[#667F93] text-base">
              Các yếu tố tạo nên thành công cho quy trình 5S
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="space-y-6">
          <h3 className="text-[#15AA7A] text-xl font-bold" id="section-8">
            8. Các yếu tố tạo nên thành công cho quy trình 5S
          </h3>
          <p className="text-[#231F20] text-base">
            Và những nhân tố quyết định đến quá trình thành công của quy trình
            nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
          </p>

          <ul className="list-outside list ml-2 text-base">
            <li className="mt-6 pl-4 indent-[-0.5rem]">
              · Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp.
              Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp
              dụng quy tắc này hay không.
            </li>
            <li className="pl-4 indent-[-0.5rem]">
              · Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh
              đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch
              thực hiện triển khai 5S.
            </li>
            <li className="pl-4 indent-[-0.5rem]">
              · Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần
              huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích
              chung của tổ chức, của doanh nghiệp.
            </li>
          </ul>

          <p className="text-[#231F20] text-base">
            Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng
            là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào
            triển khai quy trình 5S vào doanh nghiệp của mình. Và với những
            thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh
            nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.
          </p>
        </div>
      </section>
      <FeedbackReaction />
    </div>
  );
}

export default BlogContent;
