import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your new Root layout
import Root from './Root.jsx'; 
// Import your pages and components
import Home from './Pages/Home';
import Dhams from './Pages/DhamMahima';
import About from './Pages/About';
import Famous from './Pages/Famous';
// import ConnectWithUs from './Components/Contact us/ContactUs';
// import Login from './Components/Login/Login';
// import Trekking from './Pages/Trekking';
// import BlogPage from '/src/Components/blogPage/BlogPage.jsx';
// import HimachalTreksPage from './Pages/Trekking_States/HimachalTreksPage';
// import KedarnathTemplePage from "./Components/Kedarnath/KedarnathTemplePage.jsx";
// import Calendar3 from "./Components/Calendar3.jsx"
// import Trip_Planner from "./Pages/Trip_Planner/Trip_Planner.jsx"
// import TemplesSection from './Components/Varanasi/TemplesSection.jsx';
import AllMantras from './Pages/Books_Pages/mantras/AllMantras.jsx';
import AllItihasa from './Pages/Books_Pages/Vedas/AllItihasa.jsx';
import AllGranths from './Pages/Books_Pages/Vedas/AllGranths.jsx';
import AllPuranas from './Pages/Books_Pages/Vedas/AllPuranas.jsx';
import AllUpnishads from './Pages/Books_Pages/Vedas/AllUpnishads.jsx';
import AllSmritis from './Pages/Books_Pages/Vedas/AllSmritis.jsx';
import YogSutra from './Pages/Books_Pages/Vedas/yogSutra.jsx';
import AllVedas from './Pages/Books_Pages/Vedas/AllVedas.jsx';
import MantrasDetails from './Pages/Books_Pages/mantras/MantrasDetails.jsx';

import TemplePage from "./Components/Temples/TemplePage.jsx"; // ❗️ IMPORT THIS
// ... other imports
import VaranasiPage from './Components/Varanasi/Varanasi.jsx';
import BlogPage from './Components/blogPage/BlogPage';
import Trekking from './Pages/Trekking';
import HimachalTreksPage from './Pages/Trekking_States/HimachalTreksPage';
import Books from './Pages/Books';
import ConnectWithUs from './Components/Contact us/ContactUs';
import Login from './Components/Login/Login.jsx';
import TermsOfUse from './Components/TermsOfUse';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Calendar3 from './Components/Calendar3';
import Trip_Planner from './Pages/Trip_Planner/Trip_Planner.jsx';
import BlogPost from './Components/BlogPost';
import SacredDhams from './Pages/SacredDhams';
import './index.css'; 

const router = createBrowserRouter([
  {
    // The parent route now uses the Root component as its layout
    path: "/",
    element: <Root />, 
    children: [
      {
        index: true, // This is the default child route for "/"
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "dhams",
        element: <Dhams />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "famous",
        element: <Famous />,
      },
      // ... other static routes
      {
      path: "varanasi",
      element: <VaranasiPage></VaranasiPage>
    },
     {
      path: "blogs",
      element: <BlogPage/>
    },
     {
      path: "trekking",
      element: <Trekking></Trekking>
    },
      {
  path: "himachal-pradesh",     // ✅ direct route
  element: <HimachalTreksPage></HimachalTreksPage>

},
    {
      path: "books",
      element: <Books></Books>,
      // children: [{
      //   path: "rigveda",
      //   element: <Rigveda></Rigveda>
      // }
      // ]
    },
    {
  path: "vedas/:vedaId",
  element: <AllVedas />
},
  {
  path: "mantras/:mantraId",
  element: <MantrasDetails />
},
  {
  path: "smriti/:smritiId",
  element: <AllSmritis />
},
  {
  path: "upnishads/:upnishadsId",
  element: <AllUpnishads />
},
  {
  path: "puranas/:puranasId",
  element: <AllPuranas />
},
  {
  path: "granth/:granthId",
  element: <AllGranths />
},
  {
  path: "itihasas/:itihasasId",
  element: <AllItihasa />
},
  {
  path: "yogSutra/:yogSutraId",
  element: <YogSutra />
},
{
  path: "mantras",     // ✅ direct route
  element: <AllMantras></AllMantras>

},

     {
      path: "contact",
      element: <ConnectWithUs></ConnectWithUs>
    },
     {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "termsOfUse",
      element: <TermsOfUse></TermsOfUse>
    },
    {
      path: "privacyPolicy",
      element: <PrivacyPolicy></PrivacyPolicy>
    }
   ,

    {
      path: "festival-calendar",
      element: <Calendar3></Calendar3>
    }
    ,
   {
      path: "Trip_Planner",
      element: <Trip_Planner></Trip_Planner>
    },

   

    {
      path: "BlogPost",
      element: <BlogPost></BlogPost>
    }
    ,
    {
      path: "sacred-dhams",
      element: <SacredDhams></SacredDhams>
    }
    ,
    // {
    //   path: "MultimediaHub",
    //   element: <MultimediaHub></MultimediaHub>
    // },
      // ✅ ADD THE MISSING DYNAMIC ROUTE HERE
      {
        path: "temple/:templeSlug",
        element: <TemplePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);