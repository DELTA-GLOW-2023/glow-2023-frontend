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
    let startX = 0;
    let startY = 0;
    const clickThreshold = 10; // Pixels of movement to still consider a touch a 'click'

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      event.preventDefault(); // Prevent default for all touchstart events
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;

      // Calculate the distance moved
      if (Math.abs(startX - endX) < clickThreshold && Math.abs(startY - endY) < clickThreshold) {
        if (event.target instanceof Element) {
          // Create a new click event
          const clickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
          });

          // Dispatch it on the original target of the touch
          event.target.dispatchEvent(clickEvent);
        }
      } else {
        event.preventDefault(); // Prevent default for swipe-like touchend events
      }
    };

    const handleClick = (event: MouseEvent) => {
      console.log(event.type);
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("click", handleClick);
    };
  }, []);

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
