export default function PrivacyPage() {
  return (
    <div className="pt-16 pb-24 max-w-3xl mx-auto px-6">
      <header className="text-center mb-12">
        <h1 className="font-display italic font-light text-5xl text-tertiary">Chính sách bảo mật</h1>
        <div className="lotus-divider mx-auto mt-4" />
      </header>
      <article className="prose text-taupe">
        <p>ILUMEE cam kết bảo mật thông tin cá nhân của bạn. Dữ liệu calculator input được lưu để cache kết quả và cải thiện trải nghiệm.</p>
        <p>Email cá nhân chỉ dùng để gửi báo cáo & không chia sẻ cho bên thứ ba.</p>
      </article>
    </div>
  );
}
