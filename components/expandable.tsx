import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: 1,
    img: "/elements/Financeleaders-bro.png",
    description: "Ground-Up Leadership: At Quizzy, leaders are homegrown. ",
    answer:
      "The top management has climbed up from the grassroots level, shaped by hands-on experience and impeccable work ethics. This ensures seasoned, empathetic leadership that understands every facet of the operation.",
  },
  {
    id: 2,
    img: "/elements/Teamwork-bro.png",
    description:
      "Shared Responsibilities & Quality Control: Quizzy believes in the power of collective effort.",
    answer:
      " Tasks are distributed among multiple individuals to avoid overburdening and to ensure quality. This shared dependency is integral, especially in quality control, as it prevents the entire process from being reliant on a single individual's performance.",
  },
  {
    id: 3,
    img: "/elements/Businessdeal-cuate.png",
    description:
      "Dynamic Hiring & Performance Tracking: Agile and responsive, Quizzy keeps a vigilant eye on performance. ",
    answer:
      "With a policy of “Hire Fast, Fire Faster”, it actively maintains a balance between performance evaluation and ensuring that there is a backup or replacement ready when needed. This sometimes involves hiring for backup roles, considered essential for maintaining optimal output for clients.",
  },
  {
    id: 4,
    img: "/elements/Analytics-amico.png",
    description:
      "Focus on Results, Not Micromanagement: Quizzy values efficiency and results over micromanagement. ",
    answer:
      "If an individual can deliver, that's great. If not, the focus is on swiftly identifying productivity or competency issues and making the necessary changes. The mantra is clear - focus on getting the job done effectively and efficiently.",
  },
];

const ExpandableComponent = () => {
  return (
    <div className="bg-[#000104] text-center">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 sm:space-y-0 lg:gap-x-10 place-items-center">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.id} className="pt-6">
                {({ open }) => (
                  <>
                    <div key={faq.id} className="flex flex-col items-center">
                      <dt className="text-base leading-7">
                        <Disclosure.Button className="flex flex-col w-full items-center justify-between text-center">
                          <Image
                            src={faq.img}
                            className="h-full w-[250px]"
                            width={100}
                            height={100}
                            alt="Illustration"
                          />
                          <p className="font-quicksand-bold text-white">
                            {faq.description}
                          </p>

                          <span className="mt-2">
                            {open ? (
                              <ChevronUpIcon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            ) : (
                              <ChevronDownIcon
                                className="h-8 w-8 text-white"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2">
                        <p className="text-base font-quicksand leading-7 text-white">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </div>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ExpandableComponent;
