import React from "react";
import Image from "next/image";
import Link from "next/link";

const Welcome: React.FC = () => {
  return (
    <section className="items-center border-b-[color:var(--background-c-6,rgba(7,16,25,0.10))] bg-white flex flex-col px-5 border-b-2 border-solid">
      <div className="w-full max-w-[1235px] mt-32 mb-24 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
            <div className="self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-slate-950 text-opacity-80 text-sm font-medium leading-5 whitespace-nowrap items-stretch bg-stone-50 w-[93px] max-w-full px-3 py-0.5 rounded-lg">
                Best Dyno
              </div>
              <h1 className="self-stretch text-slate-950 text-6xl font-semibold leading-[80px] mt-6 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
                Dyno Studio
              </h1>
              <p className="text-slate-950 text-lg font-medium leading-7 self-stretch mt-6 max-md:max-w-full">
                Autobots are most frequently used feature of the app. We are
                happy to introduce a new update with more complex autobot
                conversetaion layouts and much more.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="justify-center items-stretch self-stretch bg-slate-950 bg-opacity-10 flex flex-col rounded-lg max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/69957c1d-200e-4e03-aecb-5e78f916f3b1?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/69957c1d-200e-4e03-aecb-5e78f916f3b1?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69957c1d-200e-4e03-aecb-5e78f916f3b1?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/69957c1d-200e-4e03-aecb-5e78f916f3b1?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/69957c1d-200e-4e03-aecb-5e78f916f3b1?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/69957c1d-200e-4e03-aecb-5e78f916f3b1?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/69957c1d-200e-4e03-aecb-5e78f916f3b1?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/69957c1d-200e-4e03-aecb-5e78f916f3b1?apiKey=796642a8b3144216a1ed2f8fd952e556&"
                  className="aspect-[2.14] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                  alt="Image description"
                />
              </div>
              <p className="text-slate-950 text-opacity-80 text-lg font-medium leading-7 self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                Revolutionize the business consultancy landscape through
                disruptive AI technologies, planning strategies, and
                unconventional wisdom.
              </p>
              <div className="items-stretch flex w-[262px] max-w-full gap-4 mt-12 max-md:mt-10">
                <a
                  href="#"
                  className="text-black text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center border-[color:var(--brand-c-brand-2,#8D5D15)] bg-orange-300 grow px-5 py-2 rounded-lg border-2 border-solid"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center border-[color:var(--background-c-6,rgba(7,16,25,0.10))] grow px-5 py-2 rounded-lg border-2 border-solid"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
