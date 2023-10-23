import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DisplayPage } from "./pages/DisplayPage.tsx";
import { InputPage } from "./pages/InputPage.tsx";
import { StartPage } from "./pages/StartPage.tsx";
import { BackgroundBlob } from "./components/core/BackgroundBlob.tsx";
import { AnimatePresence } from "framer-motion";
import {TestDisplayPage} from "./pages/TestDisplayPage.tsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <StartPage />,
      path: "/"
    },
    {
      element: <InputPage />,
      path: "/input"
    },
    {
      element: <DisplayPage />,
      path: "/display"
    },
    {
      element: <TestDisplayPage />,
      path: "/test"
    }
  ]);
  return (
    <>
      <AnimatePresence>
        <BackgroundBlob>
          <RouterProvider router={router} />
        </BackgroundBlob>
      </AnimatePresence>
    </>
  );
}

export default App;
