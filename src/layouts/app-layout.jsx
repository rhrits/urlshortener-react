import Header from "@/components/header";
import {Outlet} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";



const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made by Hritik
      </div>
      <Analytics />
    </div>
  );
};

export default AppLayout;