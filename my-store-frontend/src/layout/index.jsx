import { Outlet, Navigate } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./nav-bar";

const AppLayout = () => {
  let auth = localStorage.getItem("token");

  return (
    <>
      {auth && auth !== "undefined" ? (
        <div>
          <div className="content-container h-full col-span-5">
            <Navbar />
            <div className="flex flex-col p-3 m-0 w-full h-full">
              <div className="flex-fill">
                <Outlet />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AppLayout;
