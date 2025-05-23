import Pixelutton from "../UI/pixelButton";

export default function Chill() {
  return (
    <div className="h-screen bg-pink-50 flex items-center justify-center">
      <div className="">
        <h1 className=" text-pink-500 mb-5 w-fit mx-auto font-jersey text-3xl lg:text-6xl tracking-wider">
          Ayentha Nthng? -_-
        </h1>
        <div className="w-fit mx-auto">
          <Pixelutton text={"Nna Pokko.."} url={"/yayyy"}  />
        </div>
      </div>
    </div>
  );
}
