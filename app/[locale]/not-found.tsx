import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-24 pb-32 text-center max-w-xl mx-auto px-6">
      <h1 className="font-display italic font-light text-7xl text-tertiary mb-4">404</h1>
      <p className="text-taupe mb-8">Trang này không tồn tại — hoặc đã được dời sang địa chỉ khác.</p>
      <Link href="/vi" className="text-primary underline">Quay lại trang chủ</Link>
    </div>
  );
}
