import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import { About, Contact, Home } from "./components";
import UserId from "./components/UserId/UserId";

const router = createBrowserRouter(
  // [
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       { path: "", element: <Home /> },
  //       { path: "about", element: <About /> },
  //       { path: "contact", element: <Contact /> },
  //     ],
  //   },
  // ],
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<UserId />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
