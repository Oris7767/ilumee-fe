import { Loader2 } from 'lucide-react';

export function LoadingState({ message = 'Đang tính toán...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <Loader2 className="w-10 h-10 text-primary animate-spin" />
      <p className="text-taupe text-sm">{message}</p>
    </div>
  );
}
