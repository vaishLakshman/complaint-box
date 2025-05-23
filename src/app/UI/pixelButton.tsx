"use client";
export interface PixeluttonType {
  text: string;
  url: string;
}

const Pixelutton = ({ text, url }: PixeluttonType) => {
  return (
    <a href={url} className="relative inline-block px-4 py-2 font-medium group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span
        className={`absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-pink-400`}
      ></span>
      <span className="relative text-black font-jersey text-xl lg:text-3xl tracking-widest group-hover:text-white">
        {text}
      </span>
    </a>
  );
};

export default Pixelutton;
