import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const navigation = {
  quicklinks: [
    { name: "Home", href: "#" },
    { name: "Vision", href: "#hash-section-1" },
    { name: "Work", href: "#hash-section-2" },
    { name: "Journey", href: "#hash-section-3" },
  ],
  contact: [
    {
      name: (
        <p className="flex">
          {" "}
          <EnvelopeIcon className="w-6 h-6" /> &nbsp;support@quizzy.co.in
        </p>
      ),
      href: "mailto:support@quizzy.co.in",
    },
  ],
  social: [
    {
      name: "Internshala",
      href: "https://internshala.com/internships/internship-at-quizzy/",
      icon: (
        props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <Image
          src="/elements/internshala.png"
          width={100}
          height={100}
          alt="internshala"
          className="h-7 w-7"
        />
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/quizzyinc/",
      icon: (
        props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/quizzy-eduservices/",
      icon: (
        props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <Image
          src="/elements/linkedin-logo.svg"
          width={100}
          height={100}
          alt="linkedin"
          className="h-5 w-5"
        />
      ),
    },
  ],
};

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="bg-primary-yellow rounded-t-3xl -mt-10"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-0 sm:pt-0 lg:px-8 lg:pt-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-md font-quicksand-bold leading-6 text-gray-900">
                  Quick Links
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.quicklinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-quicksand leading-6 text-gray-600 hover:text-gray-900"
                        onClick={handleScroll}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-md font-quicksand-bold leading-6 text-gray-900">
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-sm font-quicksand leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-8 mt-8 md:mt-0">
            <Image
              className="h-10 w-auto sm:h-12"
              src="/favicon.png"
              width={100}
              height={100}
              alt=""
            />
            <p className="text-md font-quicksand leading-6 text-gray-600">
              Your silent partner powering your content and data systems, with a
              deep-rooted foundation in Edtech. Think of us as your
              co-conspirator crafting robust solutions one data point at a time.
            </p>
            <div className="flex space-x-6 items-center">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-grey"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-900/10 pt-8 sm:mt-16 lg:mt-16 flex justify-between items-center">
          <p className="text-xs leading-5 text-primary-grey">
            &copy; 2023, Quizzy, Inc. All rights reserved
          </p>
          <p className="rounded-full border border-gray-900 p-2 cursor-pointer">
            <ChevronUpIcon className="h-5 w-5" onClick={goToTop} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
