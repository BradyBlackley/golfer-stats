"use client";

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
    <div className="row">
      <form className="input-group" onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Add Putt Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>PlayerId:</label>
                <input
                  type="text"
                  value={playerId}
                  onChange={(e) => setPlayerId(e.target.value)}
                  className="form-control"
                  placeholder="PlayerId"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="clubs">Choose a club:</label>
                <select
                  name="clubs"
                  id="clubs"
                  value={club}
                  onChange={(e) => setClub(e.target.value)}
                >
                  <option value="PUTTER">
                    Putter
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Distance:</label>
                <input
                  type="text"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  className="form-control"
                  placeholder="Distance"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Select Putt Result:</label>
                <select
                  name="puttResult"
                  id="puttResult"
                  value={puttResult}
                  onChange={(e) => setPuttResult(e.target.value)}
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
              </td>
            </tr>
            <tr>
              <td>
                <label>Date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="justify-content-md-center input-group-prepend">
          <button
            className="bg-sky-500 hover:bg-sky-700"
            type="submit"
            id="button-addon1"
          >
            Create
          </button>
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
