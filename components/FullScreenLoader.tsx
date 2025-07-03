// components/FullScreenLoader.tsx
"use client"; // Adicione esta diretiva para componentes de cliente no App Router
import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image"; // Importe o componente Image do Next.js

interface FullScreenLoaderProps {
  isLoading: boolean;
  // Removeremos 'message' pois será gerado aleatoriamente
}

// Defina sua lista de frases e imagens aqui
const loadingContent = [
  {
    phrase: "Just sniffing out the best path for you. Almost there!",
    imageSrc: "/icons/loading-sniffing.png",
    alt: "Sniffing... loading...",
  },
  {
    phrase: "Sniffing... loading..",
    imageSrc: "/icons/loading-sniffing.png",
    alt: "Snoopy sniffing",
  },
  {
    phrase: "Just taking a quick sniff around the server. Loading your page!",
    imageSrc: "/icons/loading-sniffing.png",
    alt: "Snoopy sniffing",
  },
  {
    phrase:
      "Like a squirrel in the park, your content is just around the corner.",
    imageSrc: "/icons/loading-sniffing.png",
    alt: "Snoopy sniffing",
  },
  {
    phrase: "We're unleashing the good stuff. Please wait.",
    imageSrc: "/icons/loading-waiting.png",
    alt: "Snoopy waiting",
  },
  {
    phrase: "Good things come to those who wait (and scratch behind the ears)",
    imageSrc: "/icons/loading-waiting.png",
    alt: "Snoopy waiting",
  },
  {
    phrase: "Hold on to your leash! We're almost ready.",
    imageSrc: "/icons/loading-waiting.png",
    alt: "Snoopy waiting",
  },
  {
    phrase: "Paws for a moment...",
    imageSrc: "/icons/loading-waiting.png",
    alt: "Snoopy waiting",
  },
  {
    phrase: "Don't worry, I haven't chewed on the wires. Just loading!",
    imageSrc: "/icons/loading-fixing.png",
    alt: "Snoopy fixing wires",
  },
  {
    phrase: "Chasing down those last few bytes for you",
    imageSrc: "/icons/loading-fixing.png",
    alt: "Snoopy fixing wires",
  },
];

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ isLoading }) => {
  const [currentContent, setCurrentContent] = useState(loadingContent[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loadingContent.length);

    setCurrentContent(loadingContent[randomIndex]);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 bg-opacity-70 backdrop-blur-sm !p-4">
      <div className="flex flex-col items-center gap-6 text-white text-center">
        <Image
          src={currentContent.imageSrc}
          alt={currentContent.alt}
          width={500}
          height={500}
          className="rounded-lg shadow-lg border-2 border-yellow-200"
        />

        <p className="text-xl md:text-2xl font-semibold text-yellow-200 leading-tight">
          {currentContent.phrase}
        </p>

        <Loader2 size={36} className="animate-spin text-white !mt-4" />
      </div>
    </div>
  );
};

export default FullScreenLoader;
