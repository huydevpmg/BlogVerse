import { CirclePower } from "lucide-react";
import { useAuthStore } from "./../../store/AuthStore";

function LogoutBtn() {
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout(); // Gọi hàm logout từ store
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <div className="mt-2">
      <p
        className="flex cursor-pointer flex-row"
        onClick={handleLogout}
        role="button" // Đảm bảo truy cập bằng keyboard
      >
        <CirclePower
          className="duration-300 ease-in hover:text-white"
          size={30}
        />
      </p>
    </div>
  );
}

export default LogoutBtn;
