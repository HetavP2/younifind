import Header from "@/components/Header";
import ListOpportunities from "@/components/ListOpportunities";
import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <div className="text-green-500">
//       <Header>
//         <div>
//           <h1>Welcome BACK!</h1>
//           <div>
//             <ListOpportunities
//               image="/images/liked.png"
//               name="Liked Opportunities"
//               href="liked"
//             />
//           </div>
//         </div>
//       </Header>
//       <div>
//         <div>
//           <h1>Opps on dashboard</h1>
//         </div>
//         <div>
//           Lists of your opps
//         </div>
//       </div>
//     </div>
//   );
// }
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
