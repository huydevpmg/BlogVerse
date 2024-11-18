// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  return (
    <div className="bg-mainLayout relative flex min-h-screen items-center justify-center overflow-hidden opacity-70">
      {children}
    </div>
  );
}

export default MainLayout;
