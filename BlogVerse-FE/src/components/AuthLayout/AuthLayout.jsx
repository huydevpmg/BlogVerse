/* eslint-disable react/prop-types */
import FloatingShape from "./../FloatingShape";

function AuthLayout({ children }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900">
      <FloatingShape
        color="bg-cyan-300"
        size="w-64 h-64"
        top="-10%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-blue-500"
        size="w-64 h-64"
        top="70%"
        left="80%"
        delay={2}
      />
      <FloatingShape
        color="bg-teal-500"
        size="w-64 h-64"
        top="20%"
        left="30%"
        delay={2}
      />

      {children}
    </div>
  );
}

export default AuthLayout;
