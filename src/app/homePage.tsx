import Pixelutton from "./UI/pixelButton";

const HomePage = () => {
  return (
    <div className="container w-fit ">
      <h1 className="text-2xl text-pink-500 mb-5 font-jersey text-6xl tracking-wider">
        Hi Gundu..!!
      </h1>
      <div className="w-fit mx-auto">
        <Pixelutton text={"CLICK ME!!"} url={"/ntha"} bg={"bg-pink-200"} />
      </div>
    </div>
  );
};

export default HomePage;
