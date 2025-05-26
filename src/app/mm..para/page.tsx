"use client";
import Pixelutton from "../UI/pixelButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { db } from "../firebase setup/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Complaints() {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [level, setLevel] = useState(0);
  const [solution, setSolution] = useState("");

  //DB referencing
  const dbref = collection(db, "BaavaData");

  const handleSubmit = async () => {
    if (subject.length == 0 || body.length == 0 || solution.length == 0) {
      alert("Ntha vecha para baazhe :( \nMadi venda..");
    } else {
      try {
        await addDoc(dbref, {
          Subject: subject,
          Body: body,
          Level: level,
          Solution: solution,
        });
        alert("Ok baave..enik kittit ind👍");
        router.push("/sorry");
      } catch (error) {
        alert(error);
      }
    }
  };

  // eslint-disable-next-line

  return (
    <div className="h-screen bg-pink-50 flex items-center justify-center font-jersey">
      <form
        className="complaint-container w-full px-5 lg:p-0 lg:w-1/3"
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSubject(e.target.value)
            }
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
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setBody(e.target.value)
            }
          />
        </div>
        <div className="mb-2 w-full mx-auto   flex justify-evenly">
          <label className="mr-3 text-lg  w-28 lg:text-2xl lg:w-48 text-right text-pink-700">
            Ethra chood aa :
          </label>
          <select
            className="w-2/3 px-2 py-1 rounded-lg bg-gray-200 "
            value={level}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setLevel(parseInt(e.target.value))
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSolution(e.target.value)
            }
          />
        </div>
        <div className="w-fit mx-auto mt-8" onClick={handleSubmit}>
          <Pixelutton text={"Mm..Ayacho"} />
        </div>
      </form>
    </div>
  );
}
