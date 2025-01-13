import Image from "next/image";
import Tiptap from "@/components/TipTap";

export default function Home() {
    return (
            <>
        <div className={`w-full px-12 flex justify-between flex-col items-center`}>
                <Tiptap/>
        </div>

         {/* block the user if screen resolution is less than 700px */}

        <div id="block-screen" 
       className="hidden absolute top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center text-white text-center z-50 px-12">
    <p className="text-lg md:text-2xl font-semibold">
      Please use a PC/Laptop or a larger screen device.
    </p>
  </div>
        </>
    );
}
