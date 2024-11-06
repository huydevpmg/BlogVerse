import FloatingShape from './components/FloatingShape'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import EmailVerification from './pages/EmailVerificationPage'
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br 
      from-gray-900 via-blue-900 to-teal-900 flex items-center justify-center relative overflow-hidden">
      <FloatingShape color="bg-cyan-300" size="w-64 h-64" top="-10%" left="10%" delay={0} />
      <FloatingShape color="bg-blue-500" size="w-64 h-64" top="70%" left="80%" delay={2} />
      <FloatingShape color="bg-teal-500" size="w-64 h-64" top="20%" left="30%" delay={2} />

      <Routes>
        <Route path='/' element={"Home"}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/verify-email' element={<EmailVerification/>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
