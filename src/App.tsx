import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DisplayPage } from "./pages/DisplayPage.tsx";
import { InputPage } from "./pages/InputPage.tsx";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
