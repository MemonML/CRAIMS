import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import MissionSection from '../components/home/MissionSection';
import KeyAreasPreview from '../components/home/KeyAreasPreview';

const CAMPUS_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b5ccab21d60a60cd1822db/1d4f165ce_generated_2a452817.png";

export default function Home() {
  return (
    <div className="bg-[#0a1628]">
      <HeroSection />
      <StatsSection />
      <MissionSection campusImage={CAMPUS_IMAGE} />
      <KeyAreasPreview />
    </div>
  );
}
