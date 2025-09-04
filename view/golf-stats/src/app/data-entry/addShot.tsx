"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface ShotData {
  playerId: string;
  club: string;
  distance: string;
  contactType: string;
  ballFlightType: string;
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
  contactType: string,
  ballFlightType: string,
  date: string
): Promise<PostDataResponse> {
  const res = await fetch("http://localhost:9191/api/stroke/addStroke", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      playerId,
      club,
      distance,
      contactType,
      ballFlightType,
      date,
    } as ShotData),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error adding shot data");
  }
  return await res.json();
}

export default function AddShot() {
  const [playerId, setPlayerId] = useState("");
  const [club, setClub] = useState("");
  const [distance, setDistance] = useState("");
  const [contactType, setContactType] = useState("");
  const [ballFlightType, setBallFlightType] = useState("");
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await postData(
        playerId,
        club,
        distance,
        contactType,
        ballFlightType,
        date
      );
      if (response.success) {
        setSuccessMessage("Shot data added successfully!");
        //setPlayerId("");
        //setClub("");
        setDistance("");
        setContactType("");
        setBallFlightType("");
        // setDate("");
      } else {
        setSuccessMessage("Error adding shot data: " + response.message);
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
              Add Shot Data
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
                    id="clubs"
                    name="clubs"
                    value={club}
                    onChange={(e) => setClub(e.target.value)}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="null"></option>
                    <option value="DRIVER">Driver</option>
                    <option value="THREE_WOOD">3-Wood</option>
                    <option value="THREE_HYBRID">3-Hybrid</option>
                    <option value="FOUR_IRON">4-Iron</option>
                    <option value="FIVE_IRON">5-Iron</option>
                    <option value="SIX_IRON">6-Iron</option>
                    <option value="SEVEN_IRON">7-Iron</option>
                    <option value="EIGHT_IRON">8-Iron</option>
                    <option value="NINE_IRON">9-Iron</option>
                    <option value="PITCHING_WEDGE">Pitching-Wedge</option>
                    <option value="GAP_WEDGE">Gap-Wedge</option>
                    <option value="SAND_WEDGE">Sand-Wedge</option>
                    <option value="LOFT_WEDGE">Loft-Wedge</option>
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
                  htmlFor="contactType"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Select Contact Type:
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="contactType"
                    id="contactType"
                    value={contactType}
                    onChange={(e) => setContactType(e.target.value)}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="null"></option>
                    <option value="FLUSH">Flush</option>
                    <option value="MISS_HIT_THIN">Miss Hit - Thin</option>
                    <option value="MISS_HIT_FAT">Miss Hit - Fat</option>
                    <option value="MISS_HIT_TOE">Miss Hit - Toe</option>
                    <option value="MISS_HIT_HEEL">Miss Hit - Heel</option>
                    <option value="MISS">Miss</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="ballFlightType"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Select Ball Flight Type:
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    name="ballFlightType"
                    id="ballFlightType"
                    value={ballFlightType}
                    onChange={(e) => setBallFlightType(e.target.value)}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="null"></option>
                    <option value="STRAIGHT">Straight</option>
                    <option value="STRAIGHT_DRAW">Straight Draw</option>
                    <option value="STRAIGHT_FADE">Straight Fade</option>
                    <option value="PUSH">Push</option>
                    <option value="PUSH_DRAW">Push Draw</option>
                    <option value="PUSH_FADE">Push Fade</option>
                    <option value="PUSH_SLICE">Push Slice</option>
                    <option value="PULL">Pull</option>
                    <option value="PULL_DRAW">Pull Draw</option>
                    <option value="PULL_FADE">Pull Fade</option>
                    <option value="PULL_HOOK">Pull Hook</option>
                    <option value="ROLLER">Roller</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="distance"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Distance:
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="distance"
                      type="text"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      placeholder="Distance"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="date"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Date:
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      id="date"
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
