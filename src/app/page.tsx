"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 justify-center items-center min-h-screen gap-x-24 mx-64">
      <button
        className="border-2 py-4 px-5"
        onClick={() => router.push("/wys")}
      >
        Wysiwyg Editor
      </button>
      <button
        className="border-2 py-4 px-10"
        onClick={() => router.push("/cdk")}
      >
        CK Editor
      </button>
      <button
        className="border-2 py-4 px-10"
        onClick={() => router.push("/jod")}
      >
        React Jodit
      </button>
      <button
        className="border-2 py-4 px-10"
        onClick={() => router.push("/tiptap")}
      >
        Tip Tap
      </button>
    </div>
  );
}
