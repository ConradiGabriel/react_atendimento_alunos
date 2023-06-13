import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//importa o app.js
import App from "./App";
//importa o app.js
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//cria um elemento root a partir do root do index.html
root.render(
  //faz a renderização da página
  <StrictMode>
    <App />
  </StrictMode>
);
