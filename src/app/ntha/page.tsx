import Image from "next/image";
import Pixelutton from "../UI/pixelButton";
import grump from "../../../public/grump.png";
import happy from "../../../public/happy_gunds.png";
import chill from "../../../public/chill_gund.png";

export default function Options() {
  return (
    <div className="h-screen bg-pink-50 flex items-center justify-center">
      <div>
        <h1 className=" text-pink-500 mb-5 w-fit mx-auto font-jersey text-3xl lg:text-6xl tracking-wider">
          How You feeling baave?
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-4">
          <div className="w-fit group mx-auto">
            <Pixelutton text={"Complaint indo?"} url={"/mm..para"} />
            <div className="hidden lg:block mx-auto w-fit">
              <Image
                src={grump}
                alt="grumpy gund"
                height={100}
                width={100}
                className="absolute hidden drop-shadow-xl mt-3 group-hover:block"
              />
            </div>
          </div>
          <div className=" w-fit group mx-auto">
            <Pixelutton text={"Happy"} url={"/yayyy"} />
            <div className="hidden lg:block mx-auto ">
              <Image
                src={happy}
                alt="happy gund"
                height={100}
                width={100}
                className="absolute hidden drop-shadow-xl mt-3 group-hover:block"
              />
            </div>
          </div>
          <div className="w-fit mx-auto group">
            <Pixelutton text={`"Nthng"`} url={"/ayenthe"} />
            <div className="hidden lg:block mx-auto ">
              <Image
                src={chill}
                alt="chill gund"
                height={100}
                width={100}
                className="absolute hidden drop-shadow-xl mt-3 group-hover:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
