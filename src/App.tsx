import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DisplayPage } from "./pages/DisplayPage.tsx";
import { InputPage } from "./pages/InputPage.tsx";

function App() {
  localStorage.setItem("count", "0");
  localStorage.setItem("last_six_prompts", "[]");

  const router = createBrowserRouter([
    {
      element: <InputPage />,
      path: "/",
    },
    {
      element: <DisplayPage />,
      path: "/display",
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
