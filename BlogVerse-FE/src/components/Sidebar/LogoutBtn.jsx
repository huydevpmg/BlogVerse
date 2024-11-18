import { CirclePower } from "lucide-react";

function LogoutBtn() {
  return (
    <div className="mt-2">
      <p className="flex cursor-pointer flex-row">
        <CirclePower
          className="duration-300 ease-in hover:text-white"
          size={30}
        />
      </p>
    </div>
  );
}
export default LogoutBtn;
