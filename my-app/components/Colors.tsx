import * as React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <main className="justify-center items-center bg-white flex flex-col px-20 max-md:px-5">
      <h1 className="text-center text-slate-950 text-3xl font-semibold leading-10 w-[1010px] max-w-[1010px] mt-32 max-md:max-w-full max-md:mt-10">
        Your Persona is Hero, Lover, Outlaw
      </h1>
      <h2 className="text-slate-950 text-lg font-medium leading-7 mt-8 max-md:max-w-full">
        Primary Colors
      </h2>
      <div className="w-full max-w-[1010px] mt-8 pr-2 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white px-3 py-0.5 rounded-lg">
                <button className="solid-button-label">
                  Solid Button Label (Forefront)
                </button>
              </div>
              <div className="border bg-black flex shrink-0 h-[100px] flex-col mt-6 rounded-xl border-solid border-black" />
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white mt-6 px-3 py-0.5 rounded-lg">
                Represents strength and authority, suitable for text and
                outlines. <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white px-3 py-0.5 rounded-lg">
                <button className="accent-1">Accent 1 (Lover)</button>
              </div>
              <div className="border bg-orange-200 flex shrink-0 h-[100px] flex-col mt-6 rounded-xl border-solid border-black" />
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white mt-6 px-3 py-0.5 rounded-lg">
                Subtle and elegant, perfect for backgrounds and softer elements.{" "}
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white px-3 py-0.5 rounded-lg">
                <button className="accent-2">Accent 2 (Hero)</button>
              </div>
              <div className="border bg-red-500 flex shrink-0 h-[100px] flex-col mt-6 rounded-xl border-solid border-black" />
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white mt-6 px-3 py-0.5 rounded-lg">
                Bold and trustworthy, ideal for highlights and important
                features. <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-slate-950 text-lg font-medium leading-7 mt-8 max-md:max-w-full">
        Secondary Colors
      </h2>
      <div className="w-full max-w-[1010px] mt-8 mb-24 pr-2 max-md:max-w-full max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white px-3 py-0.5 rounded-lg">
                <button className="text-outline-button">
                  Text/Outline Button (Universal)
                </button>
              </div>
              <div className="border bg-black flex shrink-0 h-[100px] flex-col mt-6 rounded-xl border-solid border-black" />
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white mt-6 px-3 py-0.5 rounded-lg">
                Versatile for text and buttons, providing clear visibility.
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white px-3 py-0.5 rounded-lg">
                <button className="background-1">Background 1 (Neutral)</button>
              </div>
              <div className="border bg-white flex shrink-0 h-[100px] flex-col mt-6 rounded-xl border-solid border-black" />
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white mt-6 px-3 py-0.5 rounded-lg">
                Clean and simple, offering a crisp backdrop for content.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white px-3 py-0.5 rounded-lg">
                <button className="background-2">Background 2 (Outlaw)</button>
              </div>
              <div className="border bg-zinc-100 flex shrink-0 h-[100px] flex-col mt-6 rounded-xl border-solid border-black" />
              <div className="text-slate-950 text-opacity-80 text-xs leading-6 items-stretch bg-white mt-6 px-3 py-0.5 rounded-lg">
                Modern and understated, lending a contemporary edge.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
