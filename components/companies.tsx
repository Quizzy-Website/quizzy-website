import React from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "New Blog",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. ",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  // More posts...
];

const Companies = () => {
  return (
    <div>
      <div className="relative w-full bg-primary-grey pt-24 px-12 flex flex-col items-start justify-center">
        <div className="max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl lg:max-w-xl">
            <div className="mt-16 space-y-20 lg:mt-32 lg:mb-32">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative w-24 h-24 lg:shrink-0">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-2 text-lg leading-6 text-white font-inter">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white font-inter">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="self-center bg-white py-24 mt-[26%] w-[90%] sm:py-8 rounded-2xl border border-black absolute top-0 z-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-6">
            <h2 className="text-center text-xl font-quicksand-bold leading-8 text-gray-900">
              We worked with
            </h2>
            <div className="mx-auto mt-10 mb-8 grid grid-cols-4 items-center gap-x-12 gap-y-10 sm:grid-cols-4 sm:gap-x-10 lg:grid-cols-4">
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/companies/amazon-academy.png"
                alt="Amazon Academy"
                width={100}
                height={100}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/companies/vedantu.png"
                alt="Vendantu"
                width={100}
                height={100}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="/companies/unacademy.png"
                alt="Unacademy"
                width={100}
                height={100}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="/companies/toppr.png"
                alt="Toppr"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
