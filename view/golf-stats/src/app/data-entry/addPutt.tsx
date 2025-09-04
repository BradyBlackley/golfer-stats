"use client";

import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

interface PuttData {
  playerId: string;
  club: string;
  distance: string;
  puttResult: string;
  date: string;
}

interface PostDataResponse {
  success?: boolean;
  message?: string;
  [key: string]: unknown;
}

async function postData(
  playerId: string,
  club: string,
  distance: string,
  puttResult: string,
  date: string
): Promise<PostDataResponse> {
  const res = await fetch("http://localhost:9191/api/putt/addPutt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      playerId,
      club,
      distance,
      puttResult,
      date,
    } as PuttData),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error adding putt data");
  }
  return await res.json();
}

export default function AddPutt() {
  const [playerId, setPlayerId] = useState("");
  const [club, setClub] = useState("PUTTER");
  const [distance, setDistance] = useState("");
  const [puttResult, setPuttResult] = useState("");
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await postData(
        playerId,
        club,
        distance,
        puttResult,
        date
      );
      if (response.success) {
        setSuccessMessage("Putt data added successfully!");
        //setPlayerId("");
        // setClub("");
        // setDistance("");
        // setPuttResult("");
        // setDate("");
      } else {
        setSuccessMessage("Error adding putt data: " + response.message);
      }
    } catch (error) {
      setSuccessMessage("An unexpected error occurred.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="m-4">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Add Putt Data
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="playerId"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  PlayerId:
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="playerId"
                      type="text"
                      value={playerId}
                      onChange={(e) => setPlayerId(e.target.value)}
                      placeholder="PlayerId"
                      autoComplete="playerId"
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="clubs"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Choose a club:
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="clubs"
                    id="clubs"
                    value={club}
                    onChange={(e) => setClub(e.target.value)}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="PUTTER">Putter</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="puttDistance"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Distance:
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="puttDistance"
                      type="text"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Distance"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="puttResult"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Select Putt Result:
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="puttResult"
                    id="puttResult"
                    value={puttResult}
                    onChange={(e) => setPuttResult(e.target.value)}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="null"></option>
                    <option value="SINK">Sink</option>
                    <option value="MISS_WITHIN_GIMME_RANGE">
                      Miss Hit - Within Gimme Range
                    </option>
                    <option value="MISS_BEYOND_GIMME_RANGE">
                      Miss Hit - Beyond Gimme Range
                    </option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="puttDate"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Date:
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="puttDate"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  id="submitPuttButton"
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}
    </div>
  );
}
