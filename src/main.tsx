import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DEFAULT_WORKBOOK_DATA } from "./Data.ts";
import Test from "./Test.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Test />
  </StrictMode>
);
