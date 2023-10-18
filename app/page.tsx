"use client";

import Companies from "@/components/companies";
import CoreFeature from "@/components/core-feature";
import DataSolutions from "@/components/DataSolutions";
import ELearningServices from "@/components/ELearningServices";
import ELearningSolutions from "@/components/ELearningSolutions";
import ExpandableComponent from "@/components/expandable";
import Features from "@/components/features";
import FeaturesSlider from "@/components/FeaturesSlider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Journey from "@/components/journey";
import Numbers from "@/components/Numbers";
import TestomonialSlider from "@/components/TestomonialSlider";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Companies />
      <ELearningSolutions />
      <ELearningServices />
      <Numbers />
      <DataSolutions />
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
