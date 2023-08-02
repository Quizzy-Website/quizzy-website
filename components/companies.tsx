import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Companies = () => {
  return (
    <div>
      <div className="relative mx-auto w-full max-[840px]:w-[92%] bg-[#000104] px-12 flex flex-col items-start justify-center">
        <div className="self-center bg-white py-4 sm:py-8 rounded-2xl border border-black absolute top-0 mt-[-5%] max-[840px]:mt-[-12%] max-[480px]:mt-[-20%] z-20">
          <div className="mx-auto max-w-7xl px-0 lg:px-6">
            <h2 className="text-center md:text-2xl text-xl font-quicksand-bold leading-8 text-gray-900">
              We worked with
            </h2>
            <Marquee play pauseOnHover loop={0}>
              <ul className="mx-auto mt-10 mb-8 grid auto-rows-fr items-center gap-x-0 lg:gap-x-12 gap-y-10 grid-cols-9">
                <Image
                  className="max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/amazon-academy.webp"
                  alt="Amazon Academy"
                  width={100}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/vedantu.webp"
                  alt="Vendantu"
                  width={100}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/unacademy.webp"
                  alt="Unacademy"
                  width={100}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/toppr.webp"
                  alt="Toppr"
                  width={100}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/beyondskool.webp"
                  alt="beyondskool"
                  width={100}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/bytedance-logo.webp"
                  alt="bytedance"
                  width={100}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/cocubes-logo.webp"
                  alt="cocubes"
                  width={100}
                  height={100}
                />
                <Image
                  className="col-span-2 max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/doubtnut.webp"
                  alt="doubtnut"
                  width={100}
                  height={100}
                />
                {/* <Image
                  className="col-span-2 max-h-8 lg:max-h-12 w-full object-contain lg:col-span-1"
                  src="/companies/brainly.webp"
                  alt="doubtnut"
                  width={100}
                  height={100}
                /> */}
              </ul>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
