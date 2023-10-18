import React from "react";

const stats = [
  { id: 1, name: "Q&A content produced", value: "1M+" },
  { id: 2, name: "Video content produced", value: "350k+" },
  { id: 3, name: "Team Size", value: "130-140" },
  { id: 4, name: "No of enterprise clients", value: "5+" },
  { id: 4, name: "Content Reach", value: "10M+" },
];

const Numbers = () => {
  return (
    <div className="bg-black py-8 sm:py-12">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-quicksand-bold tracking-tight text-primary-yellow sm:text-4xl">
              Trusted by people worldwide
            </h2>
            <p className="mt-4 text-lg font-inter leading-8 text-gray-300">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-inter leading-6 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-quicksand-bold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
