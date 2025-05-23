"use client";
import Image from "next/image";
import { useMemo } from "react";
import f1 from "../../../public/flower1.png";
import f2 from "../../../public/flower2.png";
import f3 from "../../../public/flower3.png";
import f4 from "../../../public/flower4.png";
import f5 from "../../../public/flower5.png";
import f6 from "../../../public/flower6.png";
import f7 from "../../../public/cutu.png";

export default function FlowShower() {
  const images = [f1, f2, f3, f4, f5, f6, f7];

  const count = 60; // total images
  const fallImages = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      src: images[Math.floor(Math.random() * images.length)],
      left: Math.random() * 100, // horizontal position %
      delay: Math.random() * 2, // animation delay in seconds
      size: 70 + Math.random() * 32, // image size (px)
    }));
  }, []);

  return (
    <div className="bg-baazha-bg bg-contain bg-no-repeat bg-center w-screen h-screen">
      <div className="relative size-full overflow-hidden bg-white/75">
        {fallImages.map(({ id, src, left, delay, size }) => (
          <Image
            key={id}
            src={src}
            alt="falling images"
            width={size}
            height={size}
            className="absolute animate-fall"
            style={{
              left: `${left}%`,
              top: `-100px`,
              animationDelay: `${delay}s`,
              animationDuration: "2.5s",
            }}
          />
        ))}
        {fallImages.map(({ id, src, left, delay, size }) => (
          <Image
            key={id}
            src={src}
            alt="falling images"
            width={size}
            height={size}
            className="absolute animate-fall"
            style={{
              left: `${left}%`,
              top: `-100px`,
              animationDelay: `${delay}s`,
              animationDuration: "2.5s",
            }}
          />
        ))}

        <style jsx global>{`
          @keyframes fall {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh);
              opacity: 1;
            }
          }

          .animate-fall {
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
