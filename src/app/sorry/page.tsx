import Image from "next/image";
import Pixelutton from "../UI/pixelButton";
import sorry from "../../../public/sorry.png";

export default function Sorry() {
  return (
    <div className="h-screen bg-pink-50 flex items-center justify-center font-jersey">
      <div>
        <h1 className=" text-pink-500 mb-5 w-fit mx-auto font-jersey text-7xl lg:text-9xl tracking-wider">
          SORRY!
        </h1>
        <div className="my-3 w-fit mx-auto">
          <Image src={sorry} alt="sorry guy" height={200} width={200} />
        </div>
        <h2 className="text-pink-500 mt-5 w-fit mx-auto font-jersey text-sm lg:text-md tracking-wider">
          nthin aayalm
        </h2>
        <div className="w-fit mx-auto">
          <Pixelutton text="Um" url="/yayyy" />
        </div>
        <div className="text-pink-500 opacity-50 lg:opacity-50 bottom-0 w-fit text-md lg:text-lg  mt-10 mx-auto">
          submit cheytha complaint review cheytha venda{" "}
          <b className="tracking-widest">PALAHARAM</b> eduthirikkum :)
        </div>
      </div>
    </div>
  );
}
