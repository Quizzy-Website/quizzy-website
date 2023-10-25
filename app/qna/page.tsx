import ServicePage from "@/components/ServicePage";
import React from "react";

const QnA = () => {
  return (
    <ServicePage
      title="Q&A Content"
      description="Designing solutions for student questions. When AI generates
  initial content, we add a quality control layer for accuracy."
      paraOne={
        <>
          <p className="text-lg text-gray-300">
            The e-learning landscape is vast and diverse, with students at its
            center seeking accurate and relatable answers. They crave solutions
            delivered by Subject Matter Experts (SMEs) — answers that resonate
            with their unique learning journeys. Recognizing this pivotal need,
            Quizzy steps in with a flexible approach to content creation.
          </p>
          <p className="mt-10 text-lg text-gray-300">
            For clients leaning towards faster solutions, we employ AI to draft
            initial content. Yet, we&apos;re cognizant of the fact that AI,
            though powerful, may sometimes miss the subtle intricacies of human
            learning. That&apos;s where our robust quality control layer comes
            into play, refining AI-generated content for greater accuracy and
            relevance.
          </p>
        </>
      }
      imgOne="/elearning/Q&A01.1.png"
      paraTwo={
        <>
          <p className="text-lg text-gray-300">
            Conversely, when a hands-on, human touch is preferred, our team of
            SMEs dives deep into crafting content that aligns perfectly with the
            learners&apos; grade and comprehension levels. This adaptability
            ensures that our solutions are not just correct, but also tailored
            to fit the unique requirements of each learner.
          </p>
          <p className="mt-10 text-lg text-gray-300">
            Our dual-pronged approach, whether technologically-driven or
            human-led, has successfully catered to over 10 million learners.
            With Quizzy, e-learning solutions are not just answers, but pathways
            to deeper understanding and engagement.
          </p>
        </>
      }
      imgTwo="/elearning/Q&A01.2.png"
    />
  );
};

export default QnA;
