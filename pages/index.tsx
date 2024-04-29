import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  // const [isCreating, setIsCreating] = useState(false);
  // const [resultImageUrl, setResultImageUrl] = useState(undefined);

  // const handleSubmit = async () => {
  //   try {
  //     setIsCreating(true);
  //     const res = await axios.post("/api/create", { text_input: prompt });
  //     setIsCreating(false);
  //     setResultImageUrl(res.data.uri);
  //   } catch (e) {
  //     console.error(e);
  //     setIsCreating(false);
  //   }
  // };
  return (
    <main className="p-4 relative main-content">
      <h1 className="text-4xl font-bold absolute top-0 left-0 text-white" style={{ padding: '10px' }}>Coming soon...</h1>
      <div className="flex justify-center">
      <Image
        src="https://d14i3advvh2bvd.cloudfront.net/acb02f61be996decb5a4d8146729fbf9bc93b8ca8d80b4b141ccd8219be53151.jpg"
        className="rounded-lg shadow-lg"
        alt="Neocity.network"
        layout="fill"
        objectFit="cover"
      />
      </div>
    </main>
  );
}
