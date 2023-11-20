import React from "react";

const Skills: React.FC = () => {
  return (
    <main className="justify-center items-center bg-white flex flex-col px-5">
      <section className="flex w-full max-w-[1200px] flex-col items-stretch mt-32 mb-24 max-md:max-w-full max-md:my-10">
        <h1 className="text-slate-950 text-center text-4xl font-semibold leading-[56px] max-md:max-w-full">
          Recommended Fonts
        </h1>
        <div className="mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch flex flex-col max-md:mt-10">
                <h2 className="text-slate-950 text-lg font-medium leading-7 whitespace-nowrap">
                  Primary Font (Hero)
                </h2>
                <p className="text-slate-950 text-opacity-80 text-sm leading-6 mt-2">
                  Font Family: Arial Bold
                  <br />
                  <br />
                  Usage: Main headings and titles. Represents clarity and
                  decisiveness.
                  <br />
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch flex grow flex-col max-md:mt-10">
                <h2 className="text-slate-950 text-lg font-medium leading-7 whitespace-nowrap">
                  Secondary Font (Lover)
                </h2>
                <p className="text-slate-950 text-opacity-80 text-sm leading-6 mt-2">
                  Font Family: Georgia Italic
                  <br />
                  <br />
                  Usage: Subheadings and quotes. Conveys elegance and emotion.
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch flex grow flex-col max-md:mt-10">
                <h2 className="text-slate-950 text-lg font-medium leading-7 whitespace-nowrap">
                  Tertiary Font (Outlaw)
                </h2>
                <p className="text-slate-950 text-opacity-80 text-sm leading-6 mt-2">
                  Font Family: Courier New
                  <br />
                  <br />
                  Usage: Callouts and special notes. Reflects a non-conformist
                  and unique style.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
