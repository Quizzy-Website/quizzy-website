import React from "react";
import {
  AdjustmentsHorizontalIcon,
  CircleStackIcon,
  QuestionMarkCircleIcon,
  TableCellsIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from "@heroicons/react/20/solid";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

const services = [
  {
    name: "Q&A Content",
    description:
      "Designing solutions for student questions. When AI generates initial content, we add a quality control layer for accuracy.",
    href: "/qna",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Video Content",
    description:
      "Producing video solutions for student queries or test preparation questions.",
    href: "/video-content",
    icon: VideoCameraIcon,
  },
  {
    name: "Support Teams",
    description: "Live support for student questions.",
    href: "/support-teams",
    icon: UserGroupIcon,
  },
  {
    name: "Data Strategy",
    description:
      "Collaborating with top-tier CDOs globally to shape the requisite data approach for model construction.",
    href: "/data-strategy",
    icon: CircleStackIcon,
  },
];

const services2 = [
  {
    name: "Higher Quality Answers than default GPT",
    description:
      "Offering datasets enabling clients to produce superior automated responses. Clients employ Retrieval Automated Generation, utilizing the provided dataset for enhanced outcomes.",
    href: "/elevating-chatbots",
    icon: TableCellsIcon,
  },
  {
    name: "Multi-agent frameworks",
    description:
      "Delivering platforms for personalized student game experiences. Includes distinct AI Agents portraying varied characters for immersive role-playing.",
    href: "/multi-agent-framework",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Automated Grading",
    description: `Supplying datasets for client's model to facilitate automatic grading of students' long and subjective responses. Integration of manual quality control ensures model feedback and reduces grading effort.`,
    href: "/automated-grading",
    icon: AdjustmentsHorizontalIcon,
  },
];

const ELearningServices = () => {
  return (
    <div className="bg-black py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-quicksand-bold leading-7 text-primary-yellow">
            Services
          </h2>
          <p className="mt-2 text-3xl font-quicksand-bold tracking-tight text-white sm:text-4xl">
            What we can help you with
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-2 text-base font-quicksand-bold leading-7 text-white">
                  <service.icon
                    className="h-5 w-5 flex-none text-primary-yellow"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-3 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto font-inter">{service.description}</p>
                  <p className="mt-1">
                    <a
                      href={service.href}
                      className="text-sm font-inter leading-6 text-primary-yellow"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
          <dl className="mt-20 grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services2.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-2 text-base font-quicksand-bold leading-7 text-white">
                  <service.icon
                    className="h-5 w-5 flex-none text-primary-yellow"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-3 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto font-inter">{service.description}</p>
                  <p className="mt-3">
                    <a
                      href={service.href}
                      className="text-sm font-inter leading-6 text-primary-yellow"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ELearningServices;
