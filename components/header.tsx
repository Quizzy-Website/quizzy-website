import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Vision", href: "#" },
  { name: "Work", href: "#" },
  { name: "Journey", href: "#" },
];

export default function Header() {
  return (
    <>
      <div
        className="relative bg-primary-yellow p-4 md:p-8 z-20"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 87%, 0% 100%)" }}
      >
        <div className="relative pb-16 pt-2 sm:pb-24 lg:pb-20">
          <Popover>
            <nav
              className="relative mx-auto flex max-w-7xl items-center justify-between px-4"
              aria-label="Global"
            >
              <div className="flex flex-1 items-end">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span className="sr-only">Quizzy</span>
                    <img
                      className="h-10 w-auto sm:h-12"
                      src="/favicon.png"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-10 font-inter">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-[#484343] hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden text-right md:block">
                <span className="inline-flex rounded-md">
                  <a
                    href="#"
                    className="font-quicksand-bold inline-flex items-center rounded-xl border-2 border-black bg-transparent px-4 py-2 text-base font-medium text-black hover:bg-gray-50"
                  >
                    Book a call
                  </a>
                </span>
              </div>
            </nav>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-primary-yellow shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <span className="sr-only">Quizzy</span>
                      <img
                        className="h-10 w-auto sm:h-12"
                        src="/favicon.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-yellow">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-4 pb-3 pt-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full bg-black px-5 py-3 text-center font-medium text-primary-yellow hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto max-w-7xl px-4 ">
            <div className="lg:grid lg:grid-cols-12 items-center">
              <div className="mt-16 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block font-bold tracking-tight font-quicksand-bold">
                    <span className="block text-text-grey text-3xl sm:text-5xl xl:text-5xl">
                      Your Creative,
                    </span>
                    <span className="block text-text-grey text-3xl sm:text-5xl xl:text-6xl">
                      Media & Technology{" "}
                    </span>

                    <span className="block text-text-grey text-3xl sm:text-5xl xl:text-5xl">
                      Transformation Partner
                    </span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-text-grey sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua ad ad non deserunt sunt.
                </p>
              </div>
              <div className="relative mt-4 md:mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative mx-auto w-full lg:max-w-lg">
                  <button
                    type="button"
                    className="relative block w-full overflow-hidden"
                  >
                    <img
                      className="w-full"
                      src="/elements/Wall post-amico.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="relative flex items-center justify-center -mt-48 cursor-pointer hidden md:block z-20">
        <div className="absolute z-10 top-12 right-24">
          <Image
            src="/elements/arrow.svg"
            className="h-20 w-20 p-4"
            width={100}
            height={100}
            alt="arrow"
          />
        </div>
        <div className="absolute right-10 bg-primary-yellow rounded-[50%] w-[190px] h-[190px] p-4">
          <Image
            src="/elements/scroll.png"
            className="w-40 h-40"
            width={100}
            height={100}
            alt="scroll"
          />
        </div>
      </div>
      <div className="relative flex items-center justify-center block md:hidden z-20 max-[515px]:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 400"
          className="absolute top-0 mt-[-27%] origin-bottom -rotate-6 mr-[-2%]"
        >
          <path
            fill="#2d2d2d"
            fill-opacity="1"
            d="M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,229.3C672,235,768,213,864,181.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
