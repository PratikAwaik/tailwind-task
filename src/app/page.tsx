"use client";
import Image from "next/image";
import {useState} from "react";

const images = [
  {id: 1, src: "/kemper-angle.jpg"},
  {id: 2, src: "/kemper-front.jpg"},
  {id: 3, src: "/kemper-rear.jpg"},
];

const formFactor = [
  {
    id: 1,
    title: "Profiler Head",
    description:
      "Compact amplifier head, perfect for a speaker cabinet or desk.",
  },
  {
    id: 2,
    title: "Profiler Rack",
    description: "3U rackmount version of the classic profiling amplifier.",
  },
];

const powerAmps = [
  {
    id: 1,
    title: "None",
    description: "Use in the studio or with your own power amp.",
    price: 0,
  },
  {
    id: 2,
    title: "Powered",
    description: "Built-in 600W solid state power amp.",
    price: 449,
  },
];

const footController = [
  {
    id: 1,
    title: "None",
    price: 0,
  },
  {
    id: 2,
    title: "Profiler Remote Foot Controller",
    price: 449,
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentFormFactor, setCurrentFormFactor] = useState(formFactor[0]);
  const [currentPowerAmp, setCurrentPowerAmp] = useState(powerAmps[0]);
  const [currentFootController, setCurrentFootController] = useState(
    footController[0]
  );
  const [finalPrice, setFinalPrice] = useState(1799);

  return (
    <main>
      <div className="max-w-[543px] md:max-w-[1024px] mx-auto pb-32 px-4">
        <div className="main p-6 w-full">
          {/* header */}

          <header className="pb-6 border-b border-b-[#D2D6DC]">
            <h1 className="text-4xl mb-3 font-extrabold">
              Get your Kemper Profiling Amp
            </h1>
            <p className="text-xl">
              All your favorite amps and effects, together in one little box.
            </p>
          </header>

          {/* main */}
          <div className="flex items-start flex-wrap md:flex-nowrap gap-8 mt-12">
            {/* image container */}
            <div className="shrink-0 md:sticky md:top-12">
              {/* main image */}
              <div className="border border-[#E5E7EB] rounded-lg py-3 px-1 mb-4 relative max-w-full h-[206px] sm:h-[388px] md:w-[450px] md:h-[310px]">
                <Image
                  src={currentImage.src}
                  alt={currentImage.src}
                  // width={450}
                  // height={310}
                  fill
                  objectFit="contain"
                  className="w-full h-full top-0 left-0"
                />
              </div>
              <div className="flex items-center gap-4">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className={`py-1 px-4 rounded-lg cursor-pointer shadow-sm ${
                      image.id === currentImage.id
                        ? "border-2 border-[#374151]"
                        : "border border-[#E5E7EB]"
                    }`}
                    onClick={() => setCurrentImage(image)}
                    tabIndex={0}
                  >
                    <Image
                      src={image.src}
                      alt={image.src}
                      width={110}
                      height={75}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* product details */}
            <div>
              {/* meta details */}
              <div className="mb-12">
                <p className="text-[#6B7280] text-sm mb-1">Starting at</p>
                <p className="text-[#161E2E] text-5xl font-extrabold mb-6">
                  $1799
                </p>
                <p className="text-[#161E2E] text-[18px] mb-4">
                  The KEMPER PROFILER™ is the leading-edge digital guitar
                  amplifier and all-in-one effects processor.
                </p>
                <p className="text-[#6B7280] text-base mb-4">
                  Hailed as a game-changer by guitarists the world over, the
                  PROFILER™ is the first digital guitar amp to really nail the
                  full and dynamic sound of a guitar or bass amp.
                </p>
                <p>
                  This is made possible by a radical, patented technology and
                  concept which we call &quot;PROFILING&quot;.
                </p>
              </div>

              {/* form factor */}
              <div className="mb-12">
                <p className="text-[#161E2E] text-[18px] font-medium mb-2">
                  Form Factor
                </p>
                <div className="flex items-center gap-4">
                  {formFactor.map((form) => (
                    <div
                      key={form.id}
                      className={`py-5 px-6 w-fit rounded-lg cursor-pointer shadow-sm ${
                        form.id === currentFormFactor.id
                          ? "border-2 border-[#374151]"
                          : "border border-[#D2D6DC]"
                      }`}
                      onClick={() => setCurrentFormFactor(form)}
                      tabIndex={1}
                    >
                      <p className="text-[#161E2E] text-sm font-medium mb-2">
                        {form.title}
                      </p>
                      <p className="text-[#6B7280] text-sm">
                        {form.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* power amp */}
              <div className="mb-12">
                <p className="text-[#161E2E] text-[18px] font-medium mb-2">
                  Power Amp
                </p>
                <div className="flex flex-col gap-4">
                  {powerAmps.map((power) => (
                    <div
                      key={power.id}
                      className={`py-5 px-6 shadow-sm flex items-center justify-between gap-3 rounded-lg cursor-pointer ${
                        power.id === currentPowerAmp.id
                          ? "border-2 border-[#374151]"
                          : "border border-[#D2D6DC]"
                      }`}
                      onClick={() => {
                        setCurrentPowerAmp(power);
                        setFinalPrice(
                          (prevPrice) =>
                            prevPrice + (power.price - currentPowerAmp.price)
                        );
                      }}
                      tabIndex={2}
                    >
                      <div className="flex flex-col gap-2">
                        <p className="text-[#161E2E] font-medium text-sm">
                          {power.title}
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          {power.description}
                        </p>
                      </div>
                      {power.price > 0 && (
                        <p className="text-[#161E2E] text-sm">
                          + ${power.price}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* foot controller */}
              <div className="mb-12">
                <p className="text-[#161E2E] text-[18px] font-medium mb-2">
                  Foot controller
                </p>
                <div className="flex flex-col gap-4">
                  {footController.map((foot) => (
                    <div
                      key={foot.id}
                      className={`py-5 px-6 rounded-lg shadow-sm flex items-center gap-3 justify-between cursor-pointer ${
                        currentFootController.id === foot.id
                          ? "border-2 border-[#374151]"
                          : "border border-[#D2D6DC]"
                      }`}
                      onClick={() => {
                        setCurrentFootController(foot);
                        setFinalPrice(
                          (prevPrice) =>
                            prevPrice +
                            (foot.price - currentFootController.price)
                        );
                      }}
                      tabIndex={3}
                    >
                      <p className="text-[#161E2E] font-medium text-sm">
                        {foot.title}
                      </p>
                      {foot.price > 0 && (
                        <p className="text-[#161E2E] text-sm">
                          + ${foot.price}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-[#F9FAFB] w-screen border border-t-[#D2D6DC] md:fixed md:bottom-0 md:left-0">
        <div className="py-6 px-8 flex items-center gap-8 justify-between flex-wrap">
          <div className="flex items-start gap-3">
            {/* icon */}
            <div></div>
            <div>
              <p className="text-[#161E2E] text-sm font-medium m-1">
                Free Shipping{" "}
              </p>
              <p className="text-[#6B7280] text-sm">
                Get 2-day free shipping anywhere in North America.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            {/* icon */}
            <div></div>
            <div>
              <p className="text-[#161E2E] text-sm font-medium m-1">
                Free Shipping{" "}
              </p>
              <p className="text-[#6B7280] text-sm">
                Get 2-day free shipping anywhere in North America.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex flex-col justify-end gap-1">
              <p className="text-[#161E2E] text-3xl font-bold">${finalPrice}</p>
              <p className="text-[#6B7280] text-sm">
                Need financing?
                <span className="underline"> Learn more </span>
              </p>
            </div>
            <button className="inline-flex items-center justify-center bg-[#161E2E] rounded-md text-sm font-medium text-white py-2 px-4">
              Buy now
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
