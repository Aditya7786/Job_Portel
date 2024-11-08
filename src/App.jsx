import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Applayout from "./layouts/app.layout";
import landing from "./pages/landing";


const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      }
    ]
  }
])
function App() {
  // return (
  
  // );
}

export default App;