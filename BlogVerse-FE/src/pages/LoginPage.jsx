import { useState } from "react";
import { useAuthStore } from "./../store/useAuthStore";
import AuthLayout from "./../components/AuthLayout/AuthLayout";
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Link } from "react-router-dom";

import { Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <AuthLayout>
      <div className="m-40 flex justify-center max-xl:flex-col max-lg:w-full max-lg:gap-5 lg:w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mr-5 w-1/3 overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 shadow-2xl backdrop-blur-xl backdrop-filter max-lg:w-full"
        >
          <div className="p-8">
            <h2 className="mb-6 bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-center text-3xl font-bold text-transparent">
              Sign Up
            </h2>
            <form onSubmit={handleLogin}>
              <Input
                icon={Mail}
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <Input
                icon={Lock}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              ></button>
              {error && (
                <p className="mt-2 font-semibold text-red-500">{error}</p>
              )}

              <motion.button
                className="font-blod focus:ring-offset-2f mt-5 w-full rounded-lg bg-gradient-to-r from-slate-600 to-sky-600 px-4 py-3 text-white shadow-lg transition duration-200 ease-in-out hover:from-slate-700 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-gray-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>

              <div className="mt-2 flex justify-center rounded-lg bg-gray-800 bg-opacity-50 px-10 py-2">
                <p className="text-sm text-gray-500">
                  Have no account?{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue-500 hover:text-blue-200 hover:underline"
                  >
                    Create a new account!
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-2/4 items-center justify-center overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 shadow-2xl backdrop-blur-xl backdrop-filter max-lg:w-full"
        >
          <div className="center p-8">
            <h2 className="mb-6 bg-gradient-to-r from-gray-800 to-sky-100 bg-clip-text p-5 text-center text-6xl font-bold text-transparent">
              BlogVerse
            </h2>
            <p className="font-medium- mb-6 bg-gradient-to-r from-slate-300 to-sky-300 bg-clip-text p-5 text-center text-3xl text-transparent">
              Took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries
            </p>
          </div>
        </motion.div>
      </div>
    </AuthLayout>
  );
};
export default LoginPage;
