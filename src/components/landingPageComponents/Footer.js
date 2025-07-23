import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#FFF]-slate-50">
      <MaxWidthWrapper className="py-14 pb-20 flex flex-col items-center justify-center md:items-start md:justify-between md:flex-row">
        <div className="max-w-[16rem] flex flex-col space-y-2 items-center justify-center md:items-start md:justify-normal">
          <Link href="/" className="flex items-center z-40 font-bold text-lg">
            SuperCorners
          </Link>

          <p className="text-gray-700 md:text-[0.875rem] font-medium text-center md:text-left">
            Supercharge your Mac's Corners
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-24 mt-10 md:mt-0">
          <div className="flex flex-col items-center md:items-start px-4">
            <h3 className="font-semibold text-gray-800 mb-2">Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm text-center md:text-left">
              <li>
                <Link
                  href="#features"
                  className="text-sm font-normal text-gray-700 hover:underline hover:underline-offset-1"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm font-normal text-gray-700 hover:underline hover:underline-offset-1"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="text-sm font-normal text-gray-700 hover:underline hover:underline-offset-1"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start px-4">
            <h3 className="font-semibold text-gray-800 mb-2">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm text-center md:text-left">
              <li className="hover:underline hover:underline-offset-1">
                <Link href="/">Privacy Policy</Link>
              </li>
              <li className="hover:underline hover:underline-offset-1">
                <Link href="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
