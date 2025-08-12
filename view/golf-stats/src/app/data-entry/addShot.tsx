"use client";

import React, { useState } from "react";

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
    <div className="row">
      <form className="input-group" onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Add Shot Data</th>
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
                <label>Choose a club:</label>
                <select
                  name="clubs"
                  id="clubs"
                  value={club}
                  onChange={(e) => setClub(e.target.value)}
                >
                  <option value="null" selected></option>
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
              </td>
            </tr>
            <tr>
              <td>
                <label>Select Contact Type:</label>
                <select
                  name="contactType"
                  id="contactType"
                  value={contactType}
                  onChange={(e) => setContactType(e.target.value)}
                >
                  <option value="null" selected></option>
                  <option value="FLUSH">
                    Flush
                  </option>
                  <option value="MISS_HIT_THIN">Miss Hit - Thin</option>
                  <option value="MISS_HIT_FAT">Miss Hit - Fat</option>
                  <option value="MISS_HIT_TOE">Miss Hit - Toe</option>
                  <option value="MISS_HIT_HEEL">Miss Hit - Heel</option>
                  <option value="MISS">Miss</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Select Ball Flight Type:</label>
                <select
                  name="ballFlightType"
                  id="ballFlightType"
                  value={ballFlightType}
                  onChange={(e) => setBallFlightType(e.target.value)}
                >
                  <option value="null" selected></option>
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
            className="btn btn-outline-secondary"
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
