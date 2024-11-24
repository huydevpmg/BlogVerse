import { motion } from "framer-motion";
import { User, Mail, Lock, PersonStanding } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Input from "../components/Input";
import PasswordStrengthMeter from "./../components/PasswordStrengthMeter";
import { useAuthStore } from "./../store/useAuthStore";
import AuthLayout from "./../components/AuthLayout/AuthLayout";
import Select from "./../components/Select";
const SignUpPage = () => {
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [pass, setPassword] = useState("");
  // const [gender, setGender] = useState("");
  const [showPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
  });

  const { signup } = useAuthStore();

  const navigate = useNavigate();
  const [strength, setStrength] = useState(0);

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };
  const handleStrengthChange = (strength) => {
    setStrength(strength);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await signup(formData);
      navigate("/verify-email");
    } catch (error) {
      toast.error(error.response?.data?.message || "Sign up failed!"); // Hiển thị thông báo lỗi từ backend nếu có
    }
  };

  return (
    <AuthLayout>
      <div className="m-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mr-8 flex w-2/4 items-center justify-center overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 shadow-2xl backdrop-blur-xl backdrop-filter max-lg:w-full"
        >
          <div className="p-2">
            <h2 className="mb-6 bg-gradient-to-r from-gray-800 to-sky-100 bg-clip-text p-5 text-center text-6xl font-bold text-transparent">
              BlogVerse
            </h2>
            <p className="font-medium- mb-6 bg-gradient-to-r from-slate-300 to-sky-300 bg-clip-text p-5 text-center text-3xl text-transparent">
              This is where we connected, helps you connect and share with the
              people in your life.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/4 overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 shadow-2xl backdrop-blur-xl backdrop-filter max-lg:w-full"
        >
          <div className="p-8">
            <h2 className="mb-6 bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-center text-3xl font-bold text-transparent">
              Create Account
            </h2>
            <form onSubmit={handleSignUp}>
              <Input
                icon={User}
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
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
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <Select
                icon={PersonStanding}
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />

              <PasswordStrengthMeter
                password={formData.password}
                onStrengthChange={handleStrengthChange}
              />
              <motion.button
                disabled={strength < 4 && !validateForm}
                className="font-blod focus:ring-offset-2f mt-5 w-full rounded-lg bg-gradient-to-r from-slate-600 to-sky-600 px-4 py-3 text-white shadow-lg transition duration-200 ease-in-out hover:from-slate-700 hover:to-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-gray-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign Up
              </motion.button>
              <div className="flex justify-center bg-gray-800 bg-opacity-50 px-8 py-4">
                <p className="text-sm text-gray-500">
                  Already have account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-500 hover:text-blue-200 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
