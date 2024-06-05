import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, BigSidebar, SmallSidebar } from "../components";
import DashboardProvider from "../contexts/DashboardProvider";

const DashboardLayout = () => {
  return (
    <DashboardProvider>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardProvider>
  );
};

export default DashboardLayout;
