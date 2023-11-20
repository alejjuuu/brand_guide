// components/Footer.tsx
import * as React from "react";

const Tabs = () => {
  return (
    <div className="justify-center items-center bg-white flex flex-col px-5">
      <div className="flex w-full max-w-[1200px] flex-col items-stretch mt-24 mb-44 max-md:max-w-full max-md:my-10">
        <div className="text-slate-950 text-center text-4xl font-semibold leading-[56px] max-md:max-w-full">
          We emerged as a crucial touchpointin structuring customer
          relationships
        </div>

        <section className="text-center flex w-full justify-center gap-5 -mr-5 mt-16 max-w-full md:flex-wrap md:mt-10">
          <div className="flex flex-wrap items-stretch justify-center gap-5 w-full">
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-slate-950 text-lg font-medium leading-7 whitespace-nowrap">
                Smart Email Notifications
              </div>
              <div className="bg-slate-950 bg-opacity-10 shrink-0 h-0.5 mt-6" />
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-slate-950 text-lg font-medium leading-7 whitespace-nowrap">
                Smart Email Notifications
              </div>
              <div className="bg-slate-950 bg-opacity-10 shrink-0 h-0.5 mt-6" />
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-slate-950 text-lg font-medium leading-7 whitespace-nowrap">
                Response right Language
              </div>
              <div className="bg-slate-950 bg-opacity-10 shrink-0 h-0.5 mt-6" />
            </div>
          </div>
        </section>
        <div className="items-center flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex grow basis-[0%] flex-col my-auto">
            <div className="text-slate-950 text-4xl font-semibold leading-[56px] self-stretch">
              Voice & Tone
            </div>
            <div className="text-black text-xl leading-8 self-stretch mt-6">
              <span className="font-bold">Voice</span>
              <span className="">Bold, rebellious, and sophisticated</span>
              <span className="font-bold">Tone</span>
              <span className="">Confident, direct, and challenging</span>
            </div>
            <a
              href="#"
              className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-stretch border-[color:var(--background-c-6,rgba(7,16,25,0.10))] w-[265px] max-w-full mt-12 px-5 py-2 rounded-lg border-2 border-solid max-md:mt-10 max-md:px-1"
            >
              Get Started
            </a>
          </div>
          <div className="justify-center items-stretch bg-slate-950 bg-opacity-10 self-stretch flex grow basis-[0%] flex-col rounded-lg max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c2f3ed1f-92e4-494c-a056-0eb83d4f6395?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2f3ed1f-92e4-494c-a056-0eb83d4f6395?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2f3ed1f-92e4-494c-a056-0eb83d4f6395?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2f3ed1f-92e4-494c-a056-0eb83d4f6395?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2f3ed1f-92e4-494c-a056-0eb83d4f6395?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2f3ed1f-92e4-494c-a056-0eb83d4f6395?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2f3ed1f-92e4-494c-a056-0eb83d4f6395?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c2f3ed1f-92e4-494c-a056-0eb83d4f6395?apiKey=796642a8b3144216a1ed2f8fd952e556&"
              className="aspect-[1.17] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            />
          </div>
        </div>
        <div className="mt-32 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch bg-slate-950 bg-opacity-10 flex flex-col w-full m-auto rounded-lg max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66dddf06-7c6e-41c8-8957-54d8ff99814e?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66dddf06-7c6e-41c8-8957-54d8ff99814e?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66dddf06-7c6e-41c8-8957-54d8ff99814e?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66dddf06-7c6e-41c8-8957-54d8ff99814e?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66dddf06-7c6e-41c8-8957-54d8ff99814e?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66dddf06-7c6e-41c8-8957-54d8ff99814e?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66dddf06-7c6e-41c8-8957-54d8ff99814e?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66dddf06-7c6e-41c8-8957-54d8ff99814e?apiKey=796642a8b3144216a1ed2f8fd952e556&"
                  className="aspect-[1.17] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-slate-950 text-4xl font-semibold leading-[56px] self-stretch max-md:max-w-full">
                  Imaginary Guidelines{" "}
                </div>
                <div className="text-slate-950 text-xl leading-8 self-stretch mt-6 max-md:max-w-full">
                  DescriptionImages should evoke boldness, disruption, and
                  innovation. Prefer dark, rich colors with futuristic and
                  tech-savvy themes.
                  <br />
                  UsageUse high-resolution images for all branding purposes.
                  Avoid cliche or overly corporate visuals.
                </div>
                <a
                  href="#"
                  className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-stretch border-[color:var(--background-c-6,rgba(7,16,25,0.10))] w-[265px] max-w-full mt-12 px-5 py-2 rounded-lg border-2 border-solid max-md:mt-10 max-md:px-1"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
