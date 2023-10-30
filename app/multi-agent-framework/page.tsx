import ServicePage from "@/components/ServicePage";
import React from "react";

const QnA = () => {
  return (
    <ServicePage
      title="Multi-agent framework: Immersive learning"
      description="Designing solutions for student questions. When AI generates
  initial content, we add a quality control layer for accuracy."
      paraOne={
        <>
          <p className="text-lg text-gray-300">
            In today&apos;s dynamic e-learning landscape, generic experiences no
            longer suffice. Students crave personalized, engaging content that
            resonates with their unique learning paths. Enter Multi-agent
            frameworks. By incorporating varied AI Agents, each assuming a
            distinct character role, we craft immersive role-playing experiences
            that are tailored to each student&apos;s preferences and learning
            pace.
          </p>
          <p className="mt-10 text-lg text-gray-300">
            But the benefits extend beyond mere engagement. Such frameworks
            enable e-learning platforms to design intricate simulations,
            blending the thrill of gamification with the depth of personalized
            learning. When students step into these virtual worlds, they&apos;re
            not just playing - they&apos;re embarking on bespoke learning
            journeys, enriched by challenges and rewards that align with their
            individual learning objectives.
          </p>
        </>
      }
      imgOne="/elearning/Multi-Agent-Framework1.1.png"
      paraTwo={
        <>
          <p className="text-lg text-gray-300">
            The outcome? An elevated learning experience that captivates,
            educates, and retains like never before.
          </p>
          <iframe
            className="mt-10"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pJwR5pv0_gs?si=MALONvLVh-jLoOwU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </>
      }
      imgTwo="/elearning/Multi-Agent-Framework1.2.png"
    />
  );
};

export default QnA;
