import Image from "next/image";
import Tiptap from "@/components/TipTap";

export default function Home() {
    return (
        <div className={`w-full`}>
            <div className={`grid place-items-center`}>
                <Tiptap/>
            </div>
        </div>
    );
}
