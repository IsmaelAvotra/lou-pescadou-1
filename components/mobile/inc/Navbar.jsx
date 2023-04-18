import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,useLocation,useOutlet
} from "react-router-dom";

import Home from "../components/Home";
import News from "../components/News";
import RootLayout from "./RoutLayout";
import Whyus from "./../components/Whyus";
import Features from "./../components/features";
import ProduitsFrais from "../features/ProduitsFrais";
import PlatsCuisine from "../features/PlatsCuisine";
import Epicerie from "../features/Epicerie";
import CompFromage from "../features/CompositionFromage";
import Login from "../../../src/pages/Login";
import Signup from "../components/Signup";
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}>
        <Route index element={<ProduitsFrais />} />
        <Route path="frais" element={<ProduitsFrais />} />
        <Route path="plats" element={<PlatsCuisine />} />
        <Route path="epecerie" element={<Epicerie />} />
        <Route path="fromage" element={<CompFromage />} />
      </Route>
      <Route path="/news" element={<News />} />
      <Route path="/whyus" element={<Whyus />} />
      <Route path="/features" element={<Features />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Route>
  )
);
function Navbar() {
  
  return (
    <div className="bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default Navbar;
