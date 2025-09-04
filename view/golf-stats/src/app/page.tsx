"use client";

import UserContext from "./context";
import React, { useContext } from "react";

export default function Home() {
  const username = useContext(UserContext);
  return (
    <div className="m-4 ">
      <div>
        <h1>{`Welcome, ${username}`}</h1>
      </div>
    </div>
  );
}
