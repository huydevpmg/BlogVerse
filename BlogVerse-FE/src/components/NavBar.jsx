import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-7xl justify-center border-b border-base-300 bg-base-100 bg-base-100/80 backdrop-blur-lg rounded-2xl mb-3 mt-3 px-4">
      <div className="container mx-auto h-16">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 transition-all hover:opacity-80"
            >
              <h1 className="text-xl font-bold flex text-center items-center gap-1">BLOGVERSE</h1>
            </Link>
          </div>

          <div className="flex items-center gap-5">
            {authUser && (
              <>
                <Link to={"/profile"} className="btn btn-sm gap-2">
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex items-center gap-2" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline"></span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;