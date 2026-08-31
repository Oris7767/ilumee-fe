'use client';

import { Input, Label } from '@/components/ui/primitives';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface Props {
  onSubmit: (data: { full_name: string; birth_date: string; locale: string; email?: string }) => void;
  isLoading: boolean;
}

export function SoulPlanForm({ onSubmit, isLoading }: Props) {
  const t = useTranslations('Calculator.form');
  const [data, setData] = useState({ full_name: '', email: '' });
  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ full_name: data.full_name, birth_date: '', locale: 'vi', email: data.email || undefined });
  };
  return (
    <form onSubmit={handle} className="bg-white/85 backdrop-blur-sm border border-accent/30 rounded-elegant shadow-soft p-6 sm:p-10 max-w-2xl mx-auto space-y-5">
      <div>
        <Label htmlFor="sp-name" required>{t('nameLabel')}</Label>
        <Input id="sp-name" required value={data.full_name} onChange={(e) => setData((d) => ({ ...d, full_name: e.target.value }))} placeholder={t('namePlaceholder')} />
      </div>
      <div>
        <Label htmlFor="sp-email">{t('emailLabel')}</Label>
        <Input id="sp-email" type="email" value={data.email} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))} />
      </div>
      <button type="submit" disabled={isLoading} className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary transition-all disabled:opacity-50">
        {isLoading ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}
