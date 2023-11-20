// components/Footer.tsx
import * as React from "react";

const Tabs2 = () => {
  return (
    <div className="justify-center items-center bg-white flex flex-col px-5">
      <div className="flex w-full max-w-[1200px] flex-col items-stretch mt-14 mb-28 max-md:max-w-full max-md:my-10">
        <div className="text-slate-950 text-center text-4xl font-semibold leading-[56px] max-md:max-w-full">
          Hero Texts and CTAs
        </div>
        <div className="mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch bg-slate-950 bg-opacity-10 flex grow flex-col w-full mx-auto rounded-lg max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f679b546-fb08-45c3-bcb2-b63445e41939?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f679b546-fb08-45c3-bcb2-b63445e41939?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f679b546-fb08-45c3-bcb2-b63445e41939?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f679b546-fb08-45c3-bcb2-b63445e41939?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f679b546-fb08-45c3-bcb2-b63445e41939?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f679b546-fb08-45c3-bcb2-b63445e41939?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f679b546-fb08-45c3-bcb2-b63445e41939?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f679b546-fb08-45c3-bcb2-b63445e41939?apiKey=796642a8b3144216a1ed2f8fd952e556&"
                  className="aspect-[1.17] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-950 text-4xl font-semibold leading-[56px] self-stretch max-md:max-w-full">
                  Reciprocity
                </div>
                <div className="text-slate-950 text-xl leading-8 self-stretch mt-6 max-md:max-w-full">
                  The better is the engagement, the happier your customers are.
                  They will positively impact your KPIs.
                </div>
                <div className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-stretch border-[color:var(--background-c-6,rgba(7,16,25,0.10))] w-[265px] max-w-full mt-12 px-5 py-2 rounded-lg border-2 border-solid max-md:mt-10 max-md:px-1">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center flex justify-between gap-5 mt-32 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex grow basis-[0%] flex-col my-auto">
            <div className="text-slate-950 text-4xl font-semibold leading-[56px] self-stretch">
              Authority
            </div>
            <div className="text-slate-950 text-xl leading-8 self-stretch mt-6">
              Our trailblazing experts are at the forefront of AI-driven
              business consultancy.
            </div>
            <div className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-stretch border-[color:var(--background-c-6,rgba(7,16,25,0.10))] w-[265px] max-w-full mt-12 px-5 py-2 rounded-lg border-2 border-solid max-md:mt-10 max-md:px-1">
              Learn more
            </div>
          </div>
          <div className="justify-center items-stretch bg-slate-950 bg-opacity-10 self-stretch flex grow basis-[0%] flex-col py-px rounded-lg max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa722d7-91cb-4876-b942-3ba4a081c53b?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa722d7-91cb-4876-b942-3ba4a081c53b?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa722d7-91cb-4876-b942-3ba4a081c53b?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa722d7-91cb-4876-b942-3ba4a081c53b?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa722d7-91cb-4876-b942-3ba4a081c53b?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa722d7-91cb-4876-b942-3ba4a081c53b?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa722d7-91cb-4876-b942-3ba4a081c53b?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fa722d7-91cb-4876-b942-3ba4a081c53b?apiKey=796642a8b3144216a1ed2f8fd952e556&"
              className="aspect-[1.18] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            />
          </div>
        </div>
        <div className="mt-32 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch bg-slate-950 bg-opacity-10 flex grow flex-col w-full mx-auto rounded-lg max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1ef2d-1f68-4081-90b4-fc72e6b68613?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1ef2d-1f68-4081-90b4-fc72e6b68613?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1ef2d-1f68-4081-90b4-fc72e6b68613?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1ef2d-1f68-4081-90b4-fc72e6b68613?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1ef2d-1f68-4081-90b4-fc72e6b68613?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1ef2d-1f68-4081-90b4-fc72e6b68613?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1ef2d-1f68-4081-90b4-fc72e6b68613?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3e1ef2d-1f68-4081-90b4-fc72e6b68613?apiKey=796642a8b3144216a1ed2f8fd952e556&"
                  className="aspect-[1.17] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-950 text-4xl font-semibold leading-[56px] self-stretch max-md:max-w-full">
                  Social Proof
                </div>
                <div className="text-slate-950 text-xl leading-8 self-stretch mt-6 max-md:max-w-full">
                  Join the ranks of businesses transformed through our
                  unorthodox AI strategies.
                </div>
                <div className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-stretch border-[color:var(--background-c-6,rgba(7,16,25,0.10))] w-[265px] max-w-full mt-12 px-5 py-2 rounded-lg border-2 border-solid max-md:mt-10 max-md:px-1">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-950 text-4xl font-semibold leading-[56px] self-stretch max-md:max-w-full">
                  Liking
                </div>
                <div className="text-slate-950 text-xl leading-8 self-stretch mt-6 max-md:max-w-full">
                  Connect with consultants who speak your language and share
                  your desire to break barriers.
                </div>
                <div className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-stretch border-[color:var(--background-c-6,rgba(7,16,25,0.10))] w-[265px] max-w-full mt-12 px-5 py-2 rounded-lg border-2 border-solid max-md:mt-10 max-md:px-1">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch bg-slate-950 bg-opacity-10 flex grow flex-col w-full mx-auto py-px rounded-lg max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/234f488c-95cd-4890-a039-e86f78f813f0?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/234f488c-95cd-4890-a039-e86f78f813f0?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/234f488c-95cd-4890-a039-e86f78f813f0?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/234f488c-95cd-4890-a039-e86f78f813f0?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/234f488c-95cd-4890-a039-e86f78f813f0?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/234f488c-95cd-4890-a039-e86f78f813f0?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/234f488c-95cd-4890-a039-e86f78f813f0?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/234f488c-95cd-4890-a039-e86f78f813f0?apiKey=796642a8b3144216a1ed2f8fd952e556&"
                  className="aspect-[1.18] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch bg-slate-950 bg-opacity-10 flex grow flex-col w-full mx-auto py-px rounded-lg max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9661f1b5-a6e8-4f2a-87b3-ceed9565516f?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9661f1b5-a6e8-4f2a-87b3-ceed9565516f?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9661f1b5-a6e8-4f2a-87b3-ceed9565516f?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9661f1b5-a6e8-4f2a-87b3-ceed9565516f?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9661f1b5-a6e8-4f2a-87b3-ceed9565516f?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9661f1b5-a6e8-4f2a-87b3-ceed9565516f?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9661f1b5-a6e8-4f2a-87b3-ceed9565516f?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9661f1b5-a6e8-4f2a-87b3-ceed9565516f?apiKey=796642a8b3144216a1ed2f8fd952e556&"
                  className="aspect-[1.18] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-950 text-4xl font-semibold leading-[56px] self-stretch max-md:max-w-full">
                  Scarcity
                </div>
                <div className="text-slate-950 text-xl leading-8 self-stretch mt-6 max-md:max-w-full">
                  Limited spots available. Seize the opportunity to redefine
                  your business with us.
                </div>
                <div className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-stretch border-[color:var(--background-c-6,rgba(7,16,25,0.10))] w-[265px] max-w-full mt-12 px-5 py-2 rounded-lg border-2 border-solid max-md:mt-10 max-md:px-1">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs2;
