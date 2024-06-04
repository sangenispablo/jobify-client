import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

const DashboardContext = createContext();

export default function DashboardLayout() {
  const user = { name: "john" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toogleDarkTheme() {
    console.log("toogle dark theme");
  }

  function toogleSidebar() {
    setShowSidebar(!showSidebar);
  }

  async function logoutUser() {
    console.log("logout user");
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toogleDarkTheme,
        toogleSidebar,
        logoutUser,
      }}
    >
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
    </DashboardContext.Provider>
  );
}

export function useDashboardContext() {
  return useContext(DashboardContext);
}
