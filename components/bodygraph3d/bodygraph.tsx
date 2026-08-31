'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { HDChart } from '@/lib/mock-hd';
import { isWebGLAvailable } from '@/lib/features';
import { BodyGraphFallback } from './bodygraph-fallback';

const BodyGraph3D = dynamic(() => import('./bodygraph-scene').then((m) => m.BodyGraph3D), {
  ssr: false,
  loading: () => <BodyGraphFallback.Loader />,
});

interface Props {
  chart: HDChart;
}

export function BodyGraph({ chart }: Props) {
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    setWebgl(isWebGLAvailable());
  }, []);

  // While we determine WebGL, render fallback (SSR-safe)
  if (webgl === null || !webgl) {
    return <BodyGraphFallback chart={chart} />;
  }

  return <BodyGraph3D chart={chart} />;
}
