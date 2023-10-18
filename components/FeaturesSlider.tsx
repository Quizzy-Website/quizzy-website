import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturesSlider = () => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#000104] z-10">
      <div className="relative max-[1026px]:pt-10 lg:pt-6">
        <ul className="mx-auto max-[980px]:w-[70%] max-[840px]:w-[92%] max-[630px]:w-[60%] max-[520px]:w-[90%] w-[92%] p-4">
          <Slider {...settings} className="text-center">
            <li className="flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center !w-[280px] shadow h-full pt-12 pb-8 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#000104] p-4 object-cover"
                  src="/elements/feature1.webp"
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
            <li className="flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow !w-[280px] h-full pt-12 pb-8 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#000104] p-4 object-cover"
                  src="/elements/feature2.webp"
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
            <li className="flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow !w-[280px] h-full pt-12 pb-8 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#000104] p-4 object-cover"
                  src="/elements/feature3.webp"
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
            <li className="flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow !w-[280px] h-full pt-12 pb-8 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#000104] p-4 object-cover"
                  src="/elements/feature4.webp"
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
            <li className="flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow !w-[280px] h-full pt-12 pb-8 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#000104] p-4 object-cover"
                  src="/elements/feature5.webp"
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
            <li className="flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow !w-[280px] h-full pt-12 pb-8 sm:pt-8 lg:pt-12">
              <div className="flex flex-1 flex-col p-6">
                <Image
                  className="mx-auto h-24 w-24 flex-shrink-0 rounded-full bg-[#000104] p-4 object-cover"
                  src="/elements/feature5.webp"
                  width={100}
                  height={100}
                  alt=""
                />
                <h3 className="mt-6 text-md font-quicksand-bold text-gray-900">
                  Support teams
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-900 font-quicksand">
                    Live support to answer client queries
                    <br />
                    <br />
                    <br />
                  </dd>
                </dl>
              </div>
            </li>
          </Slider>
        </ul>
      </div>

      <video width="100%" height="100%" muted autoPlay loop>
        <source src="/elements/quizzyvid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default FeaturesSlider;
