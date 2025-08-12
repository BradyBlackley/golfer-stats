export enum CLUB {
  DRIVER = "DRIVER",
  THREE_WOOD = "THREE_WOOD",
  THREE_HYBRID = "THREE_HYBRID",
  FOUR_IRON = "FOUR_IRON",
  FIVE_IRON = "FIVE_IRON",
  SIX_IRON = "SIX_IRON",
  SEVEN_IRON = "SEVEN_IRON",
  EIGHT_IRON = "EIGHT_IRON",
  NINE_IRON = "NINE_IRON",
  PITCHING_WEDGE = "PITCHING_WEDGE",
  GAP_WEDGE = "GAP_WEDGE",
  SAND_WEDGE = "SAND_WEDGE",
  LOFT_WEDGE = "LOFT_WEDGE",
  PUTTER = "PUTTER",
}

export default async function Page() {
  const playerId = "1c45881f-d978-4cfd-a00d-6261ac28f0bd";
  const club = CLUB.DRIVER;

  const params = new URLSearchParams();
  params.append("playerId", playerId);
  params.append("club", club);

  const url = "http://localhost:9191/api/player/stats/avgDistance";
  const puttingUrl = "http://localhost:9191/api/player/stats/puttingAccuracy";

  const init = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  // Average distance for Driver
  const res = await fetch(`${url}?${params.toString()}`, init);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const avgDriver = await res.json();

  // Average distance for 3-Wood
  const params2 = new URLSearchParams();
  params2.append("playerId", playerId);
  params2.append("club", CLUB.THREE_WOOD);

  const res2 = await fetch(`${url}?${params2.toString()}`, init);

  if (!res2.ok) {
    throw new Error(`HTTP error! status: ${res2.status}`);
  }

  const avgThreeWood = await res2.json();

  // Average distance for 3-Hybrid
  const params3 = new URLSearchParams();
  params3.append("playerId", playerId);
  params3.append("club", CLUB.THREE_HYBRID);

  const res3 = await fetch(`${url}?${params3.toString()}`, init);

  if (!res3.ok) {
    throw new Error(`HTTP error! status: ${res3.status}`);
  }

  const avgThreeHybrid = await res3.json();

  // Average distance for 4-Iron
  const params4 = new URLSearchParams();
  params4.append("playerId", playerId);
  params4.append("club", CLUB.FOUR_IRON);

  const res4 = await fetch(`${url}?${params4.toString()}`, init);

  if (!res4.ok) {
    throw new Error(`HTTP error! status: ${res4.status}`);
  }

  const avgFourIron = await res4.json();

  // Average distance for 5-Iron
  const params5 = new URLSearchParams();
  params5.append("playerId", playerId);
  params5.append("club", CLUB.FIVE_IRON);

  const res5 = await fetch(`${url}?${params5.toString()}`, init);

  if (!res5.ok) {
    throw new Error(`HTTP error! status: ${res5.status}`);
  }

  const avgFiveIron = await res5.json();

  // Average distance for 6-Iron
  const params6 = new URLSearchParams();
  params6.append("playerId", playerId);
  params6.append("club", CLUB.SIX_IRON);

  const res6 = await fetch(`${url}?${params6.toString()}`, init);

  if (!res6.ok) {
    throw new Error(`HTTP error! status: ${res6.status}`);
  }

  const avgSixIron = await res6.json();

  // Average distance for 7-Iron
  const params7 = new URLSearchParams();
  params7.append("playerId", playerId);
  params7.append("club", CLUB.SEVEN_IRON);

  const res7 = await fetch(`${url}?${params7.toString()}`, init);

  if (!res7.ok) {
    throw new Error(`HTTP error! status: ${res7.status}`);
  }

  const avgSevenIron = await res7.json();

  // Average distance for 8-Iron
  const params8 = new URLSearchParams();
  params8.append("playerId", playerId);
  params8.append("club", CLUB.EIGHT_IRON);

  const res8 = await fetch(`${url}?${params8.toString()}`, init);

  if (!res8.ok) {
    throw new Error(`HTTP error! status: ${res8.status}`);
  }

  const avgEightIron = await res8.json();

  // Average distance for 9-Iron
  const params9 = new URLSearchParams();
  params9.append("playerId", playerId);
  params9.append("club", CLUB.NINE_IRON);

  const res9 = await fetch(`${url}?${params9.toString()}`, init);

  if (!res9.ok) {
    throw new Error(`HTTP error! status: ${res9.status}`);
  }

  const avgNineIron = await res9.json();

  // Average distance for P-Wedge
  const params10 = new URLSearchParams();
  params10.append("playerId", playerId);
  params10.append("club", CLUB.PITCHING_WEDGE);

  const res10 = await fetch(`${url}?${params10.toString()}`, init);

  if (!res10.ok) {
    throw new Error(`HTTP error! status: ${res10.status}`);
  }

  const avgP_Wedge = await res10.json();

  // Average distance for Gap-Wedge
  const params11 = new URLSearchParams();
  params11.append("playerId", playerId);
  params11.append("club", CLUB.GAP_WEDGE);

  const res11 = await fetch(`${url}?${params11.toString()}`, init);

  if (!res11.ok) {
    throw new Error(`HTTP error! status: ${res11.status}`);
  }

  const avgGap_Wedge = await res11.json();

  // Average distance for Sand-Wedge
  const params12 = new URLSearchParams();
  params12.append("playerId", playerId);
  params12.append("club", CLUB.SAND_WEDGE);

  const res12 = await fetch(`${url}?${params12.toString()}`, init);

  if (!res12.ok) {
    throw new Error(`HTTP error! status: ${res12.status}`);
  }

  const avgSand_Wedge = await res12.json();

  // Average distance for Loft-Wedge
  const params13 = new URLSearchParams();
  params13.append("playerId", playerId);
  params13.append("club", CLUB.LOFT_WEDGE);

  const res13 = await fetch(`${url}?${params13.toString()}`, init);

  if (!res13.ok) {
    throw new Error(`HTTP error! status: ${res13.status}`);
  }

  const avgLoft_Wedge = await res13.json();

  // Putting Accuracy from 5 feet
  const params14 = new URLSearchParams();
  params14.append("playerId", playerId);
  params14.append("distance", "5");

  const res14 = await fetch(`${puttingUrl}?${params14.toString()}`, init);

  if (!res14.ok) {
    throw new Error(`HTTP error! status: ${res14.status}`);
  }

  const puttingAccuracy5Feet = await res14.json();

  // Putting Accuracy from 10 feet
  const params15 = new URLSearchParams();
  params15.append("playerId", playerId);
  params15.append("distance", "10");

  const res15 = await fetch(`${puttingUrl}?${params15.toString()}`, init);

  if (!res15.ok) {
    throw new Error(`HTTP error! status: ${res15.status}`);
  }

  const puttingAccuracy10Feet = await res15.json();

  // Putting Accuracy from 15 feet
  const params16 = new URLSearchParams();
  params16.append("playerId", playerId);
  params16.append("distance", "15");

  const res16 = await fetch(`${puttingUrl}?${params16.toString()}`, init);

  if (!res16.ok) {
    throw new Error(`HTTP error! status: ${res16.status}`);
  }

  const puttingAccuracy15Feet = await res16.json();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Club</th>
            <th>Average Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Driver</td>
            <td>{avgDriver}Y</td>
          </tr>
          <tr>
            <td>3-Wood</td>
            <td>{avgThreeWood}Y</td>
          </tr>
          <tr>
            <td>3-Hybrid</td>
            <td>{avgThreeHybrid}Y</td>
          </tr>
          <tr>
            <td>4-Iron</td>
            <td>{avgFourIron}Y</td>
          </tr>
          <tr>
            <td>5-Iron</td>
            <td>{avgFiveIron}Y</td>
          </tr>
          <tr>
            <td>6-Iron</td>
            <td>{avgSixIron}Y</td>
          </tr>
          <tr>
            <td>7-Iron</td>
            <td>{avgSevenIron}Y</td>
          </tr>
          <tr>
            <td>8-Iron</td>
            <td>{avgEightIron}Y</td>
          </tr>
          <tr>
            <td>9-Iron</td>
            <td>{avgNineIron}Y</td>
          </tr>
          <tr>
            <td>P-Wedge</td>
            <td>{avgP_Wedge}Y</td>
          </tr>
          <tr>
            <td>Gap-Wedge</td>
            <td>{avgGap_Wedge}Y</td>
          </tr>
          <tr>
            <td>Sand-Wedge</td>
            <td>{avgSand_Wedge}Y</td>
          </tr>
          <tr>
            <td>Loft-Wedge</td>
            <td>{avgLoft_Wedge}Y</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Putting Distance</th>
            <th>Average Accuracy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Putting accuracy from 5 feet</td>
            <td>{puttingAccuracy5Feet}%</td>
          </tr>
          <tr>
            <td>Putting accuracy from 10 feet</td>
            <td>{puttingAccuracy10Feet}%</td>
          </tr>
          <tr>
            <td>Putting accuracy from 15 feet</td>
            <td>{puttingAccuracy15Feet}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
