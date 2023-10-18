import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ELearningSolutions = () => {
  return (
    <div className="relative overflow-hidden bg-primary-yellow pb-12 pt-24">
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                  <SparklesIcon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl lg:text-3xl sm:text-4xl font-quicksand-bold tracking-tight text-gray-900">
                  Problems we solve
                </h2>
                <p className="mt-4 text-lg text-gray-700 font-inter">
                  E-learning firms need vast content in text and video formats.
                  Creating in-house strains bandwidth, leading many to outsource
                  to us across K-12, Test Prep, and Corporate L&D. For advanced
                  features like Smart Search and RAG, they need quality data. We
                  provide this and also assist in establishing live support
                  teams for real-time student queries.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
                width={100}
                height={100}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELearningSolutions;
