"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line
function Providers({ children }: any) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
export default Providers;
