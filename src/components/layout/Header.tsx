import Image from "next/image";
import React from "react";
import { NAVIGATION } from "./navigation";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="container max-w-[1280px] mx-auto">
        <nav className="fixed flex justify-center items-center gap-16 py-3 px-[160px] bg-white shadow-sm rounded-full mt-6 z-50">
          <Image
            src="/images/logo.png"
            width={134}
            height={55.41}
            alt="logo"
            className="object-contain"
          />

          <ul className="flex gap-4">
            {NAVIGATION.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-2 group"
                >
                  <div className="relative inline-block">
                    <span className="text-[#25272A] font-medium text-[14px] leading-[150%] block transition-opacity duration-200 group-hover:opacity-0">
                      {item.label}
                    </span>
                    <span className="text-[#25272A] whitespace-nowrap font-bold text-[14px] leading-[150%] block absolute left-0 top-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                      {item.label}
                    </span>
                  </div>
                  {item.hasSubMenu && (
                    <Image
                      src="/images/arrow-down.png"
                      width={16}
                      height={16}
                      alt="arrow-down"
                      className="object-contain"
                    />
                  )}
                </Link>

                {item.hasSubMenu && item.subMenu && (
                  <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-3 py-2 px-3 rounded-[40px] border-[1px] border-[#cecfcf] bg-[#e7e8e8]">
              <Image
                src="/images/ic-vn.png"
                width={24}
                height={24}
                alt="icon-vietnam"
                className="object-contain"
              />
              <div className="flex items-center gap-1">
                <p className="text-[#25272A] font-medium text-[14px] leading-[150%]">
                  VI
                </p>
                <Image
                  src="/images/arrow-down.png"
                  width={16}
                  height={16}
                  alt="arrow-down"
                  className="object-contain"
                />
              </div>
            </button>

            <button>
              <Image
                src="/images/button-primary.png"
                width={210}
                height={38}
                alt="button-primary"
                className="object-contain"
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
