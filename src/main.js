import app from "./app.js";
import { renderToString, render } from "./renderer.js";
import reconcile from "./reconciler.js";

const root = document.querySelector(".root");


let currentTree;

function start(){
    currentTree = app();
    mount(root, currentTree);
};

export function update(){
    const nextTree = app();
    reconcile(root, root.childNodes[0], currentTree, nextTree);
    currentTree = nextTree;
};

function mount(container, vdom){
    container.appendChild(render(vdom));
};


start();