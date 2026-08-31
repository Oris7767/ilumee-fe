'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Input, Label } from '@/components/ui/primitives';

interface HDFORM {
  full_name: string;
  birth_date: string;
  birth_time: string;
  birth_place: string;
  email: string;
  locale: string;
}

interface Props {
  onSubmit: (data: HDFORM) => void;
  isLoading: boolean;
}

export function HDForm({ onSubmit, isLoading }: Props) {
  const t = useTranslations('Calculator.form');
  const [data, setData] = useState<HDFORM>({
    full_name: '',
    birth_date: '',
    birth_time: '',
    birth_place: '',
    email: '',
    locale: 'vi',
  });
  const [timeUnknown, setTimeUnknown] = useState(false);

  const update = <K extends keyof HDFORM>(k: K, v: HDFORM[K]) => setData((d) => ({ ...d, [k]: v }));

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...data,
      birth_time: timeUnknown ? '12:00' : data.birth_time,
    });
  };

  return (
    <form onSubmit={handle} className="bg-white/85 backdrop-blur-sm border border-accent/30 rounded-elegant shadow-soft p-6 sm:p-10 max-w-3xl mx-auto space-y-5">
      <div>
        <Label htmlFor="name" required>{t('nameLabel')}</Label>
        <Input id="name" required value={data.full_name} onChange={(e) => update('full_name', e.target.value)} placeholder={t('namePlaceholder')} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="dob" required>{t('dobLabel')}</Label>
          <Input id="dob" type="date" required value={data.birth_date} onChange={(e) => update('birth_date', e.target.value)} />
        </div>
        <div>
          <Label htmlFor="time">{t('timeLabel')}</Label>
          <Input
            id="time"
            type="time"
            value={timeUnknown ? '' : data.birth_time}
            onChange={(e) => update('birth_time', e.target.value)}
            disabled={timeUnknown}
          />
          <label className="flex items-center gap-2 mt-2 text-xs text-taupe cursor-pointer">
            <input type="checkbox" checked={timeUnknown} onChange={(e) => setTimeUnknown(e.target.checked)} className="accent-primary" />
            {t('timeOptional')}
          </label>
        </div>
      </div>

      <div>
        <Label htmlFor="place" required>{t('placeLabel')}</Label>
        <Input id="place" required value={data.birth_place} onChange={(e) => update('birth_place', e.target.value)} placeholder={t('placePlaceholder')} />
      </div>

      <div>
        <Label htmlFor="email">{t('emailLabel')}</Label>
        <Input id="email" type="email" value={data.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-medium uppercase tracking-widest rounded-full shadow-warm hover:bg-secondary hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? t('submitting') : t('submit')}
      </button>
    </form>
  );
}
