import app from "./app.js";
import { renderToString, render } from "./renderer.js";


function mount(container, vdom){
    container.appendChild(render(vdom));
};

const root = document.querySelector(".root");

mount(root, app);
// document.body.appendChild(render(app));
// document.body.innerHTML = renderToString(app);