import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-[#000104]">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#0d1821] to-[#000000] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      <main>
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-32 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="font-quicksand-bold text-white text-3xl sm:text-5xl xl:text-6xl">
                    Crafting AI’s future with Edtech Expertise
                  </h1>
                  <p className="relative mt-6 text-base sm:text-xl lg:text-lg xl:text-xl font-inter leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                    Your silent partner powering your content and data systems,
                    with a deep-rooted foundation in Edtech. Think of us as your
                    co-conspirator crafting robust solutions one data point at a
                    time.
                  </p>
                  <div className="mt-6 flex items-center gap-x-6">
                    <Link
                      href="https://calendly.com/quizzy/30min?back=1&month=2023-06"
                      target="_blank"
                      className="rounded-xl bg-primary-yellow px-3.5 py-2.5 text-sm font-quicksand-bold text-black shadow-sm hover:bg-transparent hover:border-2 hover:border-primary-yellow hover:text-primary-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-yellow transition duration-150"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="group ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src="/headerimg/1.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 group-hover:hidden"
                        priority={false}
                      />
                      <Image
                        src="/headerimg/1_1.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 hidden group-hover:block"
                        priority={false}
                      />
                      <div className="cursor-pointer absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="group mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="/headerimg/2.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 group-hover:hidden"
                        priority={false}
                      />
                      <Image
                        src="/headerimg/2_2.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 hidden group-hover:block"
                        priority={false}
                      />
                      <div className="cursor-pointer absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/headerimg/3.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 group-hover:hidden"
                        priority={false}
                      />
                      <Image
                        src="/headerimg/3_3.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 hidden group-hover:block"
                        priority={false}
                      />
                      <div className="cursor-pointer absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="group w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src="/headerimg/4.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 group-hover:hidden"
                        priority={false}
                      />
                      <Image
                        src="/headerimg/4_4.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 hidden group-hover:block"
                        priority={false}
                      />
                      <div className="cursor-pointer absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/headerimg/5.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 group-hover:hidden"
                        priority={false}
                      />
                      <Image
                        src="/headerimg/5_5.svg"
                        alt=""
                        width={100}
                        height={100}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transition duration-150 hidden group-hover:block"
                        priority={false}
                      />
                      <div className="cursor-pointer absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
