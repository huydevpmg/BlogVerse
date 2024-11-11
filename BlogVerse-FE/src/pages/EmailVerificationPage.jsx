import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/AuthStore";
import toast from './../../node_modules/react-hot-toast/src/index';
import FloatingShape from './../components/FloatingShape';

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const { error, verifyEmail } = useAuthStore()
  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input field if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      await verifyEmail(verificationCode);
      navigate("/")
      toast.success("Email verified successfully")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (code.every(digit => digit !== '')) {
      handleSubmit(new Event('submit'))
    }
  }, [code])
  return (

    <div className="min-h-screen bg-gradient-to-br 
      from-gray-900 via-blue-900 to-teal-900 flex items-center justify-center relative overflow-hidden">
      <FloatingShape color="bg-cyan-300" size="w-64 h-64" top="-10%" left="10%" delay={0} />
      <FloatingShape color="bg-blue-500" size="w-64 h-64" top="70%" left="80%" delay={2} />
      <FloatingShape color="bg-teal-500" size="w-64 h-64" top="20%" left="30%" delay={2} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-2/4 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden mr-8 flex items-center justify-center max-lg:w-full"
      >
        <div className="p-8">
          <h2
            className="text-5xl font-bold text-center bg-gradient-to-r
         from-blue-500 to-sky-100 text-transparent bg-clip-text p-5"
          >
            Verify your Email
          </h2>
          <p
            className="text-xl font-medium mb-6 text-center bg-gradient-to-r
         from-slate-300 to-sky-300 text-transparent bg-clip-text p-5"
          >
            Enter 6 digits to verify.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={(e) => {
                    const pastedData = e.clipboardData.getData("Text").slice(0, 6).split("");
                    const newCode = [...code];
                    pastedData.forEach((char, i) => {
                      if (i < 6) newCode[i] = char;
                    });
                    setCode(newCode);

                    // Focus on the next empty input or last input
                    const focusIndex = pastedData.length < 6 ? pastedData.length : 5;
                    inputRefs.current[focusIndex]?.focus();
                  }
                  }
                  className="w-12 h-12 text-center text-2xl font-bold bg-slate-900 text-white border-2 border-gray-600 rounded-lg focus:border-blue-700 focus:outline-none"
                />
              ))}
            </div>
            {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}

            <motion.button className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-slate-600 to-sky-600 text-white font-blod rounded-lg shadow-lg
           hover:from-slate-700 hover:to-sky-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2f 
           focus:ring-offset-gray-600 transition duration-200'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailVerificationPage;
