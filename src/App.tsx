import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DisplayPage } from "./pages/DisplayPage.tsx";
import { InputPage } from "./pages/InputPage.tsx";
import { PromptTestPage } from "./pages/PromptTestPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <InputPage />,
      path: "/",
    },
    {
      element: <DisplayPage />,
      path: "/display",
    },
    {
      element: <PromptTestPage />,
      path: "/prompt-test",
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
