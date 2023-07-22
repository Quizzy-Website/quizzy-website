import React from "react";

const Journey = () => {
  return (
    <div className="w-full bg-white flex lg:flex-row flex-col items-center justify-center mx-auto py-10 lg:py-0">
      <div className="w-full drop-shadow-md">
        <div
          className="items-center relative w-full h-[250px] bg-primary-yellow hidden lg:flex"
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
      <div className="w-full lg:w-[135%] text-center px-4 md:px-16">
        <p className="font-quicksand-bold text-2xl block lg:hidden mb-4">
          Journey
        </p>
        <p className="mb-8">
          A notable evolution in Quizzy&apos;s journey was the diversification
          from primarily text-based content creation in 2018 to embracing video
          solutions post-2020. This shift underscored Quizzy&apos;s adaptability
          and commitment to aligning with emerging trends and demands.In sum,
          Quizzy’s ascent has been marked by steadfast growth, global outreach,
          and an evolution in services, showcasing its resilience and
          adaptability in an ever-evolving market.
        </p>
        <button
          type="button"
          className="rounded-lg bg-primary-yellow px-16 py-2.5 text-md font-quicksand-bold text-black shadow-sm"
        >
          Work
        </button>
      </div>
    </div>
  );
};

export default Journey;
