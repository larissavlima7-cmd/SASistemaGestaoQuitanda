// js/app.js
import { QuitandaModel } from "./model/QuitandaModel.js";
import { QuitandaView } from "./view/QuitandaView.js";
import { QuitandaController } from "./controller/QuitandaController.js";

// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  // Instancia o MVC
  const app = new QuitandaController(new QuitandaModel(), new QuitandaView());
});
