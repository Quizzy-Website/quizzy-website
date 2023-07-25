import Image from "next/image";
import React from "react";

const features = [
  {
    name: "Collaboration",
    description: "Fostering a shared purpose to build a better tomorrow.",
    icon: "/elements/collaboration.png",
  },
  {
    name: "Drive Changes",
    description: "Uniting diverse talents to multiply impact and drive change.",
    icon: "/elements/change-management.png",
  },
  {
    name: "Dedication",
    description:
      "DedicationCommitting heart and soul to the pursuit of global betterment.",
    icon: "/elements/save-time.png",
  },
];

const Features = () => {
  return (
    <div className="bg-black z-10" id="hash-section-1">
      <div className="relative py-8 sm:py-8 lg:py-36">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-quicksand-bold tracking-tight text-white sm:text-3xl">
            What drives us?
          </p>
          <p className="mx-auto mt-5 max-w-prose font-quicksand text-lg text-white">
              Our journey is one of unison – where education, technology, and
            data converge     in harmony. Bound by dedication, inspired by
            creativity, and driven by proficiency, we are shaping the tapestry
            of tomorrow.
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-xl px-6 py-8 border-2 border-primary-yellow">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl">
                        <Image
                          src={feature.icon}
                          width={100}
                          height={100}
                          alt="icon"
                          className="h-20 w-20"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-quicksand-bold leading-8 tracking-tight text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base font-inter leading-7 text-[#D9D9D9]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
