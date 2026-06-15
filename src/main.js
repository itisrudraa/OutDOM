import app from "./app.js";
import { renderToString } from "./renderer.js";


document.body.innerHTML = renderToString(app);