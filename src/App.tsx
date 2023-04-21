import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <HomePage />,
      path: "/",
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
