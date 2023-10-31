import ServicePage from "@/components/ServicePage";
import React from "react";

const VideoContent = () => {
  return (
    <ServicePage
      title="Video Content"
      description="Producing video solutions for student queries or test preparation questions."
      paraOne={
        <>
          <p className="text-lg text-gray-300">
            The world of e-learning is witnessing a shift; students are
            increasingly gravitating towards audio-visual resources. At Quizzy,
            we acknowledge and embrace this change, offering dynamic video
            solutions tailored to diverse learning needs.
          </p>
          <p className="mt-10 text-lg text-gray-300">
            For our younger learners in the K-5 bracket, vibrant animations
            breathe life into lessons. The playful visuals, combined with
            instructive audio, captivate their attention, turning lessons into
            memorable experiences.
          </p>
        </>
      }
      imgOne="/elearning/VideoContent1.1.png"
      paraTwo={
        <>
          <p className="text-lg text-gray-300">
            As students progress to more advanced levels, particularly in the
            test preparation phase, the emphasis transitions from merely
            retaining information to deeply understanding and internalizing
            concepts. Here, our video content is meticulously designed to delve
            into core principles, breaking them down for easy comprehension
            while ensuring key takeaways are emphasized.
          </p>
          <p className="mt-10 text-lg text-gray-300">
            Whether it&apos;s through delightful animations for the young or
            in-depth explanations for advanced learners, Quizzy ensures that
            every video solution is tailored to the specific grade and learning
            objectives. With us, video content isn&apos;t just about viewing;
            it&apos;s about understanding, retaining, and excelling.
          </p>
        </>
      }
      imgTwo="/elearning/VideoContent1.2.png"
    />
  );
};

export default VideoContent;
