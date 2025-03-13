import Image from "next/image";
import React from "react";
import { NAVIGATION } from "./navigation";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="container max-w-[1280px] mx-auto">
        <nav className="fixed flex justify-center items-center gap-16 py-3 px-[160px] bg-white shadow-sm rounded-full mt-8 z-50">
          <Image src="/images/logo.png" width={134} height={55.41} alt="logo" />

          <ul className="flex gap-2">
            {NAVIGATION.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="flex items-center gap-2 px-2">
                  <p>{item.label}</p>
                  {item.hasSubMenu && (
                    <Image
                      src="/images/arrow-down.png"
                      width={16}
                      height={16}
                      alt="arrow-down"
                    />
                  )}
                </Link>
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
                />
              </div>
            </button>

            <button>
              <Image
                src="/images/button-primary.png"
                width={210}
                height={38}
                alt="button-primary"
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
