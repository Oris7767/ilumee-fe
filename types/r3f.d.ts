// Ambient type augmentation for react-three-fiber intrinsic elements.
//
// r3f's three-types.d.ts declares its intrinsic elements via
// `declare global { namespace JSX { interface IntrinsicElements extends ThreeElements {} } }`.
// In some TS/bundler configurations (notably React 19 + `jsx: preserve`),
// TypeScript resolves JSX through the React module namespace rather than the
// global namespace, so the global augmentation alone does not propagate to
// .tsx files.
//
// We re-augment BOTH the global namespace AND `React.JSX` to ensure r3f's
// intrinsic elements are usable as JSX tags in this project.

import type { ThreeElements } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      // React.JSX.IntrinsicElements already covers HTML/SVG, so ThreeElements
      // is additive and typed as such.
    }
  }
}

export {};
