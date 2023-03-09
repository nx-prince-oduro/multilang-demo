import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar({ blok, locale, locales, defaultLocale }) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const changeLocale = (loc) => {
    router.push(router.pathname, router.pathname, { locale: loc });
  };

  return (
    <div {...storyblokEditable(blok)} className="max-w-full bg-orange-500 ">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-white">{blok.logo}</a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/about">
              <a className="text-white text-l ">{blok.link1}</a>
            </Link>
            <Link href="/contact">
              <a className="ml-4 text-white text-l">{blok.link2}</a>
            </Link>
            <Link href="/blog">
              <a className="ml-4 text-white text-l">{blok.link3}</a>
            </Link>
            <Link href="/blog">
              <a className="ml-4 text-white text-l">{blok.link4}</a>
            </Link>
            <Link href="/blog">
              <a className="ml-4 text-white text-l">{blok.link5}</a>
            </Link>
            <Link href="/blog">
              <a className="ml-4 text-white text-l">{blok.link6}</a>
            </Link>
          </div>
          <div>
            <button className="px-4 py-2 mr-4 font-bold text-orange-500 bg-white rounded">
              Contact
            </button>

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {locale}
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {}
              {/* <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {locale}
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {locale}
                    </a>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
