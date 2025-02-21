import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Loader from "./shared/Loader/Loader";
import { useLocation } from "react-router";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  // const location = useLocation();
  // const [showLoader, setShowLoader] = useState(false);


  return (
    <>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactsPage />} />
            </Route>
          </Routes>
        </Suspense>

    </>
  );
}

export default App;
