import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ILUMEE — Awaken Your True Power',
  description: 'Soul Plan, Human Design & Thần số học. Khám phá bản thiết kế của chính bạn.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
