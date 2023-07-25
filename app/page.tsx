"use client";

import Companies from "@/components/companies";
import CoreFeature from "@/components/core-feature";
import ExpandableComponent from "@/components/expandable";
import Features from "@/components/features";
import FeaturesSlider from "@/components/FeaturesSlider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Journey from "@/components/journey";
import TestomonialSlider from "@/components/TestomonialSlider";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Companies />
      <FeaturesSlider />
      <Features />
      <CoreFeature />
      <TestomonialSlider />
      <Journey />
      <ExpandableComponent />
      <Footer />
    </main>
  );
}
