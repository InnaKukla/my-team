import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
        {/* <ToastContainer autoClose={1700} position="top-center" /> */}
      </main>
    </>
  );
};

export default Layout;
