"use client";
import DealsSection from "@/components/LandingPage/Details";
import HomePage, { BackgroundOverlay } from "@/components/LandingPage/Home";
import Partners from "@/components/LandingPage/Partners";
import DiscoverSection from "@/components/LandingPage/Discover";
import SubscribeCard from "@/components/LandingPage/SubsribeCard";
import AppLayout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <AppLayout>
      <div className="w-screen relative">
      <BackgroundOverlay />
      </div>
      <HomePage />
      <Partners />
      <DiscoverSection />
      <DealsSection />
      <SubscribeCard />
    </AppLayout>
  );
}
