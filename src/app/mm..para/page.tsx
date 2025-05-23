"use client";
import Pixelutton from "../UI/pixelButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Complaints() {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [level, setLevel] = useState(0);
  const [solution, setSolution] = useState("");

  const handleSubmit = () => {
    // toast.success("Ayachu 👍");
    // router.push("/sorry");
  };

  // eslint-disable-next-line 
  const handleSubjectChange = (e: any) => {
    setSubject(e.target.value);
  };

  // eslint-disable-next-line 
  const handleBodyChange = (e: any) => {
    setBody(e.target.value);
  };

  // eslint-disable-next-line 
  const handleLevelChange = (e: any) => {
    setLevel(e.target.value);
  };

  // eslint-disable-next-line 
  const handleSolution = (e: any) => {
    setSolution(e.target.value);
  };

  return (
    <div className="h-screen bg-pink-50 flex items-center justify-center font-jersey">
      <form
        className="complaint-container w-full px-5 lg:p-0 lg:w-1/3"
        onSubmit={handleSubmit}
      >
        <h1 className=" text-pink-700 mb-5 w-fit mx-auto font-jersey text-4xl lg:text-6xl tracking-wider">
          Parayu kunjaave
        </h1>
        <div className="mb-2 w-full mx-auto  flex justify-evenly">
          <label className="mr-3 text-lg w-28 lg:text-2xl lg:w-48 text-right text-pink-700">
            Vishayam :
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Nee choriyana varthanm paranju."
            className="bg-gray-200 w-2/3 px-2 py-1 rounded-lg"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="mb-2 w-full mx-auto   flex justify-evenly">
          <label className="mr-3 text-lg w-28 lg:text-2xl lg:w-48 text-right text-pink-700">
            Vishadamayi para :
          </label>
          <textarea
            rows={4}
            id="body"
            placeholder="Nee eppozhum ingane oronn paranju choriyan vannu........"
            className="w-2/3 px-2 py-1 rounded-lg bg-gray-200 "
            value={body}
            onChange={handleBodyChange}
          />
        </div>
        <div className="mb-2 w-full mx-auto   flex justify-evenly">
          <label className="mr-3 text-lg  w-28 lg:text-2xl lg:w-48 text-right text-pink-700">
            Ethra chood aa :
          </label>
          <select
            className="w-2/3 px-2 py-1 rounded-lg bg-gray-200 "
            value={level}
            onChange={handleLevelChange}
          >
            <option disabled value={""} id="none">
              Select
            </option>
            <option value={1} id="1">
              Koreshe
            </option>
            <option value={2} id="2">
              Nallonam
            </option>
            <option value={3} id="3">
              NINNE BLOCK CHEYYUMEDA PATTI!
            </option>
          </select>
        </div>
        <div className="mb-2 w-full mx-auto  flex justify-evenly">
          <label className="mr-3 text-lg w-28 lg:text-2xl lg:w-48 text-right text-pink-700">
            Njn nthelm cheyyano :
          </label>
          <input
            type="text"
            placeholder="Mindaathe adangi irikk.."
            id="solutions"
            className="bg-gray-200 w-2/3 px-2 py-1 rounded-lg"
            value={solution}
            onChange={handleSolution}
          />
        </div>
        <div className="w-fit mx-auto mt-8" onClick={handleSubmit}>
          <Pixelutton text={"Mm..Ayacho"} url={"/sorry"} />
        </div>
      </form>
    </div>
  );
}
