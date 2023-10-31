import Image from "next/image";

const Navigation = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Quizzy</span>
            <Image
              width={100}
              height={100}
              className="h-16 w-auto sm:h-24"
              src="/logo.png"
              alt="Logo"
              priority={true}
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span className="inline-flex rounded-md">
            <a
              href="https://calendly.com/quizzy/30min?back=1&month=2023-06"
              target="_blank"
              className="font-quicksand-bold inline-flex items-center rounded-xl hover:border-2 hover:border-primary-yellow bg-primary-yellow hover:bg-transparent px-4 py-2 text-base font-medium text-black hover:text-primary-yellow hover:bg-gray-50 transition duration-150"
            >
              Contact Us
            </a>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
