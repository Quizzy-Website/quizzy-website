import React from "react";

const Journey = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center mx-auto">
      <div className="w-full drop-shadow-md">
        <div
          className="flex items-center relative w-full h-[250px] bg-primary-yellow"
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
      <div className="w-[135%] text-center px-16">
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
