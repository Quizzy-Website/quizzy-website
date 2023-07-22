import Image from "next/image";
import React from "react";
import Carousel from "./Carousel/carousel";

const CoreFeature = () => {
  return (
    <div>
      <div
        style={{ clipPath: "polygon(0% 38%, 100% 38%, 100% 40%, 0 99%)" }}
        className="bg-primary-grey w-full h-[500px] -mt-60 -z-1"
      ></div>
      <div className="flex justify-center">
        <div className="w-[80%] mt-32 text-center mx-[5%]">
          <h1 className="font-quicksand-bold text-2xl">Our Core Features</h1>
          <p className="font-quicksand mt-4">
            At Quizzy, we&apos;re your powerhouse for creating content and data
            on a grand scale. With a diverse, skilled remote team at the helm,
            we focus on precision and quality. We dream big with you, providing
            the tools and talent to bring those dreams to life. Together,
            we&apos;re not just scaling heights; we&apos;re forging new
            frontiers and shaping the future.
          </p>
          <Image
            src="/elements/Ellipse 75.png"
            className="w-3/4 mx-auto"
            width={100}
            height={100}
            alt="ellipse"
          />
        </div>

        <div className="relative w-full flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="902"
            height="1062"
            viewBox="0 0 902 1062"
            fill="none"
            className="absolute top-[-330px] right-[-80px]"
          >
            <path
              d="M0.581055 318L1116.8 0.113199L1444.43 935.218L415.08 1062L0.581055 318Z"
              fill="#2C2D2D"
            />
          </svg>
          <Carousel>
            <div className="absolute flex flex-col items-start right-[-15%]">
              <Image
                width={100}
                height={100}
                className="w-[200px]"
                src="/elements/scalability.png"
                alt="scalability"
              />
              <h1 className="-mt-4 font-inter text-3xl text-secondary-yellow ml-28">
                Scalable Solutions{" "}
              </h1>
              <p className="font-inter mt-4 text-white">
                Creating systems that adapt and grow with your needs.
              </p>
            </div>

            <div className="absolute flex flex-col items-start right-[-15%]">
              <Image
                width={100}
                height={100}
                className="w-[200px]"
                src="/elements/focus.png"
                alt="scalability"
              />
              <h1 className="-mt-4 font-inter text-3xl text-secondary-yellow ml-40">
                Precision Focus
              </h1>
              <p className="font-inter mt-4 text-white">
                Ensuring attention to detail and commitment to quality.
              </p>
            </div>

            <div className="absolute flex flex-col items-start right-[-15%]">
              <Image
                width={100}
                height={100}
                className="w-[200px]"
                src="/elements/geometry.png"
                alt="scalability"
              />
              <h1 className="-mt-4 font-inter text-3xl text-secondary-yellow ml-52">
                Diverse Expertise
              </h1>
              <p className="font-inter mt-4 text-white">
                Utilizing a global remote team with varied skills for
                well-rounded solutions
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
