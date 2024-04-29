import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <main className="p-4 relative main-content">
      <div className="flex justify-center relative">
        <div className="rounded-lg shadow-lg overflow-hidden relative">
          <Image
            src="https://d14i3advvh2bvd.cloudfront.net/acb02f61be996decb5a4d8146729fbf9bc93b8ca8d80b4b141ccd8219be53151.jpg"
            alt="Neocity.network"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl text-white">Coming Soon</h2>
          </div>
        </div>
      </div>
    </main>
  );
}