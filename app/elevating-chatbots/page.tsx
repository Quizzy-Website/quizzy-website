import ServicePage from "@/components/ServicePage";
import React from "react";

const ElevatingChatbots = () => {
  return (
    <ServicePage
      title="Higher Quality Answers than default GPT"
      description="Offering datasets enabling clients to produce superior automated responses. Clients employ Retrieval Automated Generation, utilizing the provided dataset for enhanced outcomes."
      paraOne={
        <>
          <p className="text-lg text-gray-300">
            In the digital age, students expect instant, accurate answers. While
            default GPT-based chatbots deliver swift responses, the quality can
            sometimes miss the mark, especially when the subject is nuanced or
            grade-specific. Our solution bridges this gap. By offering
            specialized datasets, we empower clients to refine their chatbots
            using Retrieval Automated Generation (RAG), ensuring that responses
            are not just fast, but also finely-tuned to the exact needs of the
            student&apos;s grade level.
          </p>
        </>
      }
      imgOne="/elearning/Chatbots1.1.png"
      paraTwo={
        <>
          <p className="text-lg text-gray-300">
            By integrating these enhanced chatbots into their courses,
            e-learning companies can provide students with immediate,
            subject-specific feedback and grading. This precision transforms the
            student experience. They no longer receive generic answers but
            tailored insights that respect the intricacies of their study level.
            The result? Chatbots that truly understand the student&apos;s
            context, enhancing their learning journey and boosting their
            confidence in automated assistance.
          </p>
        </>
      }
      imgTwo="/elearning/Chatbots1.2.png"
    />
  );
};

export default ElevatingChatbots;
