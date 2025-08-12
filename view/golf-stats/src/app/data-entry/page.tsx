import AddShot from "./addShot";
import AddPutt from "./addPutt";

export default async function Page() {
  return(
    <div>
      <AddShot />
      <AddPutt />
    </div>
  );
}