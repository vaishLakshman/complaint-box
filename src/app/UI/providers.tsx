"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Providers({ children }: any) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
export default Providers;
