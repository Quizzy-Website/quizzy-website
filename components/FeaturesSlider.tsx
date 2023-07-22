import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const FeaturesSlider = () => {
  return (
    <div className="mt-20 bg-primary-grey z-10">
      <div className="relative max-[1026px]:pt-52 lg:pt-32">
        <Marquee play pauseOnHover loop={0}>
          <ul className="mx-auto grid auto-rows-fr gap-4 grid-cols-5">
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow w-[270px] h-full pt-12 pb-12 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#2D3432] p-4 object-cover"
                  src="/elements/feature1.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <h3 className="mt-6 text-md font-quicksand-bold text-gray-900">
                  Image Annotation{" "}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-900 font-quicksand">
                    Enhancing AI capabilities by meticulously marking and
                    defining elements within images for machine learning
                    applications.
                  </dd>
                </dl>
              </div>
            </li>
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow w-[270px] h-full pt-12 pb-12 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#2D3432] p-4 object-cover"
                  src="/elements/feature2.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <h3 className="mt-6 text-md font-quicksand-bold text-gray-900">
                  Video Annotation
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-900 font-quicksand">
                    Adding contextual labels in video frames to train AI
                    algorithms, improving object tracking, and activity
                    recognition.
                  </dd>
                </dl>
              </div>
            </li>
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow w-[270px] h-full pt-12 pb-12 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#2D3432] p-4 object-cover"
                  src="/elements/feature3.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <h3 className="mt-6 text-md font-quicksand-bold text-gray-900">
                  Text Annotation
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-900 font-quicksand">
                    Highlighting and categorizing key textual elements to create
                    a better understanding of context and semantics for AI
                    models.
                  </dd>
                </dl>
              </div>
            </li>
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow w-[270px] h-full pt-12 pb-12 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#2D3432] p-4 object-cover"
                  src="/elements/feature4.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <h3 className="mt-6 text-md font-quicksand-bold text-gray-900">
                  Audio Transcription
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-900 font-quicksand">
                    Converting spoken language in audio files into written form,
                    aiding in voice recognition, and improving accessibility.
                  </dd>
                </dl>
              </div>
            </li>
            <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow w-[270px] h-full pt-12 pb-12 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#2D3432] p-4 object-cover"
                  src="/elements/feature5.png"
                  width={100}
                  height={100}
                  alt=""
                />
                <h3 className="mt-6 text-md font-quicksand-bold text-gray-900">
                  Sentiment Analysis
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-900 font-quicksand">
                    Interpreting and classifying emotions conveyed in textual
                    data to provide valuable insights into customer attitudes
                    and behaviors.
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </Marquee>
      </div>
      <video width="100%" height="100%" muted autoPlay loop>
        <source src="/elements/quizzyvid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default FeaturesSlider;
