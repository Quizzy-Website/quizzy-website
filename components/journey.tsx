import React from "react";

const Journey = () => {
  return (
    <div className="relative w-full bg-white flex lg:flex-row flex-col items-center mx-auto py-10 lg:py-0 h-[350px] lg:h-[230px]">
      <div className="absolute -top-2 w-full drop-shadow-md z-10">
        <div
          className="items-center relative w-2/5 h-[240px] bg-primary-yellow hidden lg:flex"
          style={{
            backgroundImage: "url('/elements/Rectangle850.svg')",
            clipPath: "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
          }}
        >
          <p className="absolute font-quicksand-bold left-[25%] text-2xl">
            Journey
          </p>
        </div>
      </div>
      <div className="lg:w-3/5 w-full absolute right-0 top-0 py-4 lg:pt-8 text-center px-4 md:px-16">
        <p className="font-quicksand-bold text-2xl block lg:hidden mb-4">
          Journey
        </p>
        <p>
          A notable evolution in Quizzy&apos;s journey was the diversification
          from primarily text-based content creation in 2018 to embracing video
          solutions post-2020. This shift underscored Quizzy&apos;s adaptability
          and commitment to aligning with emerging trends and demands.In sum,
          Quizzy’s ascent has been marked by steadfast growth, global outreach,
          and an evolution in services, showcasing its resilience and
          adaptability in an ever-evolving market.
        </p>
      </div>
    </div>
  );
};

export default Journey;
