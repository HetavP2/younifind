import Navbar from "@/components/Navbar";
import AuthSystem from "@/components/AuthSystem";
import HomePageContent from "./components/HomePageContent";
export const revalidate = 0;

export default async function Home() {
  return (
    <div className="">
      <div className="">
        <Navbar>
          <a href="/login" className="bg-royalyellow hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6  hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200">
            Login
          </a>
        </Navbar>
      </div>
      <HomePageContent />
    </div>
  );
}
