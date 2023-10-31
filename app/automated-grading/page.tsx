import ServicePage from "@/components/ServicePage";
import React from "react";

const AutomatedGrading = () => {
  return (
    <ServicePage
      title="Automated Grading"
      description="Supplying datasets for client's model to facilitate automatic grading of students' long and subjective responses. Integration of manual quality control ensures model feedback and reduces grading effort."
      paraOne={
        <>
          <p className="text-lg text-gray-300">
            Automated grading is revolutionizing the educational landscape,
            offering timely and efficient feedback on student submissions. By
            supplying datasets tailored for our clients&apos; models, we enable
            the swift evaluation of long, subjective student responses. But
            it&apos;s not solely about speed; we integrate a manual quality
            control layer, ensuring the model&apos;s feedback is precise and
            relevant.
          </p>
        </>
      }
      imgOne="/elearning/AutomatedGrading1.1.png"
      paraTwo={
        <>
          <p className="text-lg text-gray-300">
            For students, this approach is transformative. They receive
            detailed, custom reviews that spotlight their strengths and pinpoint
            areas needing attention. Such immediate feedback accelerates their
            learning curve, allowing them to grasp and rectify their mistakes
            swiftly. This rapid feedback loop fosters a proactive learning
            environment, empowering students to target specific areas for
            improvement and enhancing their overall comprehension.
          </p>
          <p className="mt-10 text-lg text-gray-300">
            For e-learning companies, the advantages are twofold: significant
            time-savings on manual grading and the provision of high-quality,
            detailed feedback that strengthens the student&apos;s learning
            journey. In this synergy of technology and human oversight, both
            companies and learners reap the benefits.
          </p>
        </>
      }
      imgTwo="/elearning/AutomatedGrading1.2.png"
    />
  );
};

export default AutomatedGrading;
