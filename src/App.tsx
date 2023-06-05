import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {DisplayPage} from "./pages/DisplayPage.tsx";
import {InputPage} from "./pages/InputPage.tsx";
import emojiData from "react-apple-emojis/src/data.json"
import {EmojiProvider} from "react-apple-emojis";

function App() {
  localStorage.setItem("count", "0");
  localStorage.setItem("last_six_prompts", "[]");

  const router = createBrowserRouter([
    {
      element: <InputPage/>,
      path: "/",
    },
    {
      element: <DisplayPage/>,
      path: "/display",
    },
  ]);
  return (
    <>
      <EmojiProvider data={emojiData}>
        <RouterProvider router={router}/>
      </EmojiProvider>
    </>
  );
}

export default App;
