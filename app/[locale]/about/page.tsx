export default function AboutPage() {
  return (
    <div className="pt-16 pb-24 max-w-4xl mx-auto px-6">
      <header className="text-center mb-12">
        <div className="tagline mb-4">About</div>
        <h1 className="font-display italic font-light text-5xl lg:text-7xl text-tertiary">About ILUMEE</h1>
        <div className="lotus-divider mx-auto mt-4" />
      </header>

      <article className="prose prose-lg max-w-none text-taupe leading-relaxed">
        <h2 className="font-display text-3xl text-tertiary">Câu chuyện thương hiệu</h2>
        <p>
          <strong className="font-display text-2xl text-tertiary">ILUMEE — "Awaken Your True Power"</strong> ra đời từ trải nghiệm cá nhân:
          khi lần đầu nhìn thấy BodyGraph của mình, mọi sự lạ lẫm trong cuộc sống bỗng có tên gọi. Năng lượng "thất vọng" khi cố khởi xướng
          mà không phải Generator, tiếng nói "không" trong cơ thể mỗi khi đi sai hướng — tất cả trở nên rõ ràng.
        </p>
        <p>
          ILUMEE ra đời với sứ mệnh <em>đánh thức sức mạnh thật của mỗi người</em> bằng cách giải mã bản thiết kế năng lượng cá nhân qua ba bộ môn huyền học ứng dụng:
          Soul Plan, Human Design, và Thần số học — kết hợp cùng cộng đồng & dịch vụ đồng hành thực hành.
        </p>

        <h2 className="font-display text-3xl text-tertiary mt-12 mb-4">Triết lý</h2>
        <ul>
          <li><strong>Không phải "thay đổi"</strong> — mà là hiểu và sống đúng thiết kế.</li>
          <li><strong>Không phải mê tín</strong> — mỗi hệ thống đều có cơ sở toán học & lịch sử.</li>
          <li><strong>Luôn có lựa chọn</strong> — bản đồ chỉ ra con đường, bạn vẫn đi.</li>
        </ul>
      </article>
    </div>
  );
}
