import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DisplayPage } from "./pages/DisplayPage.tsx";
import { InputPage } from "./pages/InputPage.tsx";
import { StartPage } from "./pages/StartPage.tsx";
import { AnimatePresence } from "framer-motion";
import { TestDisplayPage } from "./pages/TestDisplayPage.tsx";
import { ManagePromptsPage } from "./pages/ManagePromptsPage.tsx";
import { DisplayPageDelayed } from "./pages/DelayedDisplayPage.tsx";

function App() {
  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      // Prevent the default context menu behavior only for touch events
      if (event.target instanceof HTMLElement) {
        // Check if the touch event is on an element where you want to prevent the context menu
        const isContextMenuDisabledElement = event.target.matches(".disable-context-menu");

        if (isContextMenuDisabledElement) {
          event.preventDefault();
        }
      }
    };

    // Add touchstart event listener when the component mounts
    document.addEventListener("touchstart", handleTouchStart, { passive: false });

    // Remove touchstart event listener when the component unmounts
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []); // Empty dependency array ensures the effect runs only once (on mount)


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
