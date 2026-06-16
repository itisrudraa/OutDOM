import app from "./app.js";
import { renderToString, render } from "./renderer.js";


document.body.appendChild(render(app));
// document.body.innerHTML = renderToString(app);