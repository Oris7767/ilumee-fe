import { AlertCircle } from 'lucide-react';

export function ErrorState({ title = 'Đã xảy ra lỗi', message = 'Vui lòng thử lại hoặc liên hệ với chúng tôi.' }: { title?: string; message?: string }) {
  return (
    <div className="bg-rose/40 border border-primary/30 rounded-elegant p-6 flex gap-3 max-w-xl">
      <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <h3 className="font-medium text-tertiary">{title}</h3>
        <p className="text-sm text-taupe mt-1">{message}</p>
      </div>
    </div>
  );
}
