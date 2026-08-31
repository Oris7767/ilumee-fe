import { HeroSection } from '@/components/home/hero-section';
import { ToolsCards } from '@/components/home/tools-cards';
import { ServicesCards } from '@/components/home/services-cards';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ToolsCards />
      <ServicesCards />
    </>
  );
}
