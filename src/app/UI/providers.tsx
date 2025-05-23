"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
function Providers({ children }: any) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
export default Providers;
