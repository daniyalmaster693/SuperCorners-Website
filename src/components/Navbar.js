import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-md transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-700 hover:text-gray-600"
            >
              <span>SuperCorners</span>
            </Link>

            <div className="hidden md:flex items-center gap-5 lg:gap-10">
              <Link
                href="#features"
                className="text-sm font-normal text-gray-700 hover:text-gray-600"
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-sm font-normal text-gray-700 hover:text-gray-600"
              >
                FAQ
              </Link>
              <Link
                href="#download"
                className="text-sm font-normal text-gray-700 hover:text-gray-600"
              >
                Download
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <Menu className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
