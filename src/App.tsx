import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DisplayPage } from "./pages/DisplayPage.tsx";
import { InputPage } from "./pages/InputPage.tsx";
import { StartPage } from "./pages/StartPage.tsx";
import { AnimatePresence } from "framer-motion";
import { TestDisplayPage } from "./pages/TestDisplayPage.tsx";
import { ManagePromptsPage } from "./pages/ManagePromptsPage.tsx";
import { DisplayPageDelayed } from "./pages/DelayedDisplayPage.tsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <StartPage />,
      path: "/",
    },
    {
      element: <InputPage />,
      path: "/input",
    },
    {
      element: <DisplayPage />,
      path: "/display",
    },
    {
      element: <DisplayPageDelayed />,
      path: "/display/delay",
    },
    {
      element: <TestDisplayPage />,
      path: "/test",
    },
    {
      element: <ManagePromptsPage />,
      path: "/manage-prompts",
    },
  ]);
  return (
    <>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </>
  );
}

export default App;
