"use client";

import Tiptap from "@/components/TipTap";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    function checkScreenSize() {
      const blockScreen = document.getElementById('block-screen');
      if (blockScreen) {
        if (window.innerWidth < 700) {
          blockScreen.classList.remove('hidden');
          blockScreen.classList.add('flex');
          document.body.style.overflow = 'hidden';
        } else {
          blockScreen.classList.add('hidden');
          blockScreen.classList.remove('flex');
          document.body.style.overflow = 'auto';
        }
      }
    }

    // Initial check on page load
    checkScreenSize();

    // Recheck on window resize
    window.addEventListener('resize', checkScreenSize);
  })

  return (
    <>
      <div className={`w-full px-12`}>
        <Tiptap />
      </div>

      {/* block the user if screen resolution is less than 700px */}

      <div id="block-screen"
        className="absolute top-0 left-0 w-full h-full bg-gray-800 hidden items-center justify-center text-white text-center z-50 px-12">
        <p className="text-lg md:text-2xl font-semibold">
          Please use a PC/Laptop or a larger screen device.
        </p>
      </div>
    </>
  );
}
