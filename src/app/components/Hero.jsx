import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#0b0e12] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-center gap-8 lg:gap-12">

          <div>
            <p className="text-[#b6ff00] text-xs font-bold tracking-[0.2em] mb-6">
              WORKOUT LIBRARY
            </p>

            <h1 className="font-oswald text-[42px] md:text-[50px] lg:text-[60px] font-[800] leading-[1.1] text-white uppercase">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-6 max-w-[620px] text-sm md:text-base text-[#9ca0a8] leading-7">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

         <a
  href="#library"
  className="inline-flex items-center gap-2 mt-8 bg-[#b6ff00] text-black px-5 py-3 rounded-md text-sm font-bold hover:bg-[#a5e900] transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>

  BROWSE WORKOUTS
</a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/banner.png"
              width={500}
              height={500}
              alt="FitLog workout"
              className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[400px] h-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;