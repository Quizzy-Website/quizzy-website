import Image from "next/image";
import React from "react";

const features = [
  {
    name: "Scalable Solutions",
    description: "Creating systems that adapt and grow with your needs.",
    icon: "/elements/scalability.png",
  },
  {
    name: "Precision Focus",
    description: "Ensuring attention to detail and commitment to quality.",
    icon: "/elements/focus.png",
  },
  {
    name: "Diverse Expertise",
    description:
      "Utilizing a global remote team with varied skills for well-rounded solutions",
    icon: "/elements/geometry.png",
  },
];

const CoreFeature = () => {
  return (
    <div id="hash-section-2">
      <div className="relative bg-primary-yellow py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-2xl lg:text-3xl font-quicksand-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Core Features
          </p>
          <p className="mx-auto mt-5 font-inter text-lg lg:text-xl text-gray-700">
            At Quizzy, we&apos;re your powerhouse for creating content and data
            on a grand scale. With a diverse, skilled remote team at the helm,
            we focus on precision and quality. We dream big with you, providing
            the tools and talent to bring those dreams to life. Together,
            we&apos;re not just scaling heights; we&apos;re forging new
            frontiers and shaping the future.
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-white px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-[#000104] p-3 shadow-lg">
                          <Image
                            src={feature.icon}
                            width={100}
                            height={100}
                            className="h-20 w-20"
                            aria-hidden="true"
                            alt="icon"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-quicksand-bold leading-8 tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base font-quicksand leading-7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
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

export default CoreFeature;
