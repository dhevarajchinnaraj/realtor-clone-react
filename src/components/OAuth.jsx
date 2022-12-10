import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button
      className="flex item-center justify-center w-full
     bg-red-700 text-white px-7 py-2 uppercase text-sm font-medium rounded-xl"
    >
      <FcGoogle className="text-xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
