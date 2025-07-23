import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

function HeroSection() {
  return (
    <section className="bg-slate-50">
      <MaxWidthWrapper className="pt-10 !px-2 lg:!px-10 lg:pt-24 lg:pb-20">
        <div className="flex flex-col gap-10 items-center">
          <div className="col-span-1 px-2 lg:px-0">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center">
              <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl mb-4">
                Supercharge your Mac's Corners
              </h1>

              <video
                src="https://dropover.s3.eu-central-1.amazonaws.com/videos/ventura/dropover_intro.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="mt-7 mb-8 rounded-[2.5rem] max-w-full w-[480px] lg:w-[720px] mx-auto"
              />

              <div className="flex flex-col items-center text-center">
                <Link
                  href="#"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "flex items-center justify-center mt-8 group rounded-full px-6 py-3"
                  )}
                >
                  <span>Get SuperCorners</span>
                </Link>
                <p className="text-sm text-gray-600 mt-2 mx-auto">
                  Requires macOS 13.0 and later
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default HeroSection;
