import Navbar from "@/components/Navbar";
import AuthSystem from "@/components/AuthSystem";

export const revalidate = 0;

export default function Home() {
  return (
    <div>
      <Navbar>
        <AuthSystem className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" />
      </Navbar>
      Welcome to Demo!
    </div>
  );
}
