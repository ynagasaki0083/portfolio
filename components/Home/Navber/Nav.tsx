"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  {
    /* useEffectと合わせてスクロール時にナビゲーションバーのカラーを変更するもの。対象はnavBg使ってるところ */
  }
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // fixed h-[12vh]：高さ(消してもデフォルトの値が入るため消えはしない)　z-[10]：▼▼▼？？？？？　bg-blue-950：青色　w-full：幅サイズいっぱい
  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed"
      } h-[12vh] z-[10] bg-blue-950 w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          src="/logo.png"
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p className="nav__link">{navLink.label}</p>
                </Link>
              );
            })}
          </div>
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button
              className="md:px-10 md:py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white
            hover:bg-gray-200 transition-all duration-200 rounded-lg"
            >
              Hire Me
            </button>
            {/* Burger */}
            {/* lg:hidden：TailWindの機能で、ウィンドウサイズが大きいときの挙動制御。今回はPC等の大きいときは非表示に、スマホは表示 */}
            <Bars3BottomRightIcon
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
