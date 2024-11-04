import { motion } from 'framer-motion'
import Input from '../components/Input'
import { User, Mail, Lock } from 'lucide-react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import PasswordStrengthMeter from '../components/PasswordStrengthMeter'
const SignUpPage = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [pass, setPassword] = useState('')
  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return (
    <session className='lg:w-full m-40 flex justify-center max-xl:flex-col max-lg:gap-5 max-lg:w-full' >
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-2/4 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden mr-8 flex items-center justify-center max-lg:w-full'  
    >
      <div className='p-8' >
        <h2 className='text-6xl font-bold mb-6 text-center bg-gradient-to-r
         from-gray-800 to-sky-100 text-transparent bg-clip-text p-5'>
          BlogVerse
        </h2>
        <p className='text-3xl font-medium- mb-6 text-center bg-gradient-to-r
         from-slate-300 to-sky-300 text-transparent bg-clip-text p-5'>
          This is where we connected, helps you connect and share with the people in your life.
        </p>
        
      </div>
    </motion.div>
    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-1/3 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden max-lg:w-full'
      >
        <div className='p-8'>
          <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r
         from-cyan-300 to-sky-100 text-transparent bg-clip-text'>
            Create Account
          </h2>
          <form onSubmit={handleSignUp}>
            <Input
              icon={User}
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              icon={Mail}
              type='text'
              placeholder='Email'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />

            <Input
              icon={Lock}
              type='password'
              placeholder='Password'
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordStrengthMeter password={pass} />

            <motion.button className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-slate-600 to-sky-600 text-white font-blod rounded-lg shadow-lg
           hover:from-slate-700 hover:to-sky-700 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2f 
           focus:ring-offset-gray-600 transition duration-200'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </motion.button>

            <div className='px-8 py-4 bg-gray-800 bg-opacity-50 flex justify-center'>
              <p className='text-sm text-gray-500'>
                Already have account? {" "}
                <Link to={"/login"} className='text-blue-500 hover:text-blue-200 hover:underline'>
                  Login</Link>
              </p>
            </div>

          </form>
        </div>
      </motion.div>

    </session>



  )
}

export default SignUpPage
