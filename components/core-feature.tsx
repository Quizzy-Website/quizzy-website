import Image from "next/image";
import React from "react";
import Carousel from "./Carousel/carousel";

const CoreFeature = () => {
  return (
    <div>
      <div
        style={{ clipPath: "polygon(0% 38%, 100% 38%, 100% 40%, 0 99%)" }}
        className="bg-primary-grey w-full h-[500px] -mt-60 -z-1 block max-[925px]:hidden"
      ></div>
      <div className="justify-center flex max-[925px]:hidden">
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
            className="absolute top-[-330px] max-[1190px]:right-[-220px] max-[1030px]:right-[-300px] right-[-80px]"
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
                className="w-[200px] max-[1030px]:w-[150px]"
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
                className="w-[200px] max-[1030px]:w-[150px]"
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
                className="w-[200px] max-[1030px]:w-[150px]"
                src="/elements/geometry.png"
                alt="scalability"
              />
              <h1 className="-mt-4 font-inter text-3xl text-secondary-yellow max-[1026px]:ml-36 ml-52">
                Diverse Expertise
              </h1>
              <p className="font-inter mt-4 text-white max-[1190px]:w-[80%] w-full">
                Utilizing a global remote team with varied skills for
                well-rounded solutions
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="justify-center flex-col items-center hidden max-[925px]:flex bg-primary-grey text-white px-3 sm:px-8 py-8">
        <div className="text-center">
          <h1 className="font-quicksand-bold text-2xl mb-8">
            Our Core Features
          </h1>
          <Carousel>
            <div className="flex flex-col items-center">
              <Image
                width={100}
                height={100}
                className="w-[150px] max-[500px]:w-[100px]"
                src="/elements/scalability.png"
                alt="scalability"
              />
              <h1 className="mt-4 font-inter max-[500px]:text-2xl text-3xl text-secondary-yellow">
                Scalable Solutions{" "}
              </h1>
              <p className="font-inter mt-4  text-white">
                Creating systems that adapt and grow with your needs.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                width={100}
                height={100}
                className="w-[150px] max-[500px]:w-[100px]"
                src="/elements/focus.png"
                alt="scalability"
              />
              <h1 className="mt-4 font-inter max-[500px]:text-2xl text-3xl text-secondary-yellow">
                Precision Focus
              </h1>
              <p className="font-inter mt-4 text-white">
                Ensuring attention to detail and commitment to quality.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                width={100}
                height={100}
                className="w-[150px] max-[500px]:w-[100px]"
                src="/elements/geometry.png"
                alt="scalability"
              />
              <h1 className="mt-4 font-inter max-[500px]:text-2xl text-3xl text-secondary-yellow">
                Diverse Expertise
              </h1>
              <p className="font-inter mt-4 text-white w-full">
                Utilizing a global remote team with varied skills for
                well-rounded solutions
              </p>
            </div>
          </Carousel>
          <p className="font-quicksand mt-[38%] max-[850px]:mt-[50%] max-[650px]:mt-[60%] max-[580px]:mt-[70%] max-[430px]:mt-[82%] max-[375px]:mt-[90%]">
            At Quizzy, we&apos;re your powerhouse for creating content and data
            on a grand scale. With a diverse, skilled remote team at the helm,
            we focus on precision and quality. We dream big with you, providing
            the tools and talent to bring those dreams to life. Together,
            we&apos;re not just scaling heights; we&apos;re forging new
            frontiers and shaping the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
