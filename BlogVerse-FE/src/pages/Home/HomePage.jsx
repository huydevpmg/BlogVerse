import MainLayout from "./../../components/MainLayout/MainLayout";
import Sidebar from "./../../components/Sidebar/Sidebar";
import MessageContainer from "./../../components/MessageContainer/MessageContainer";

function HomePage() {
  return (
    <MainLayout>
      <div className="flex gap-9 overflow-hidden bg-gray-400 bg-opacity-0 bg-clip-padding backdrop-blur-lg backdrop-filter sm:h-[450px] md:h-[550px]">
        <Sidebar />
        <MessageContainer />
      </div>
    </MainLayout>
  );
}

export default HomePage;
