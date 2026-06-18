import app from "./app.js";
import { renderToString, render } from "./renderer.js";

const root = document.querySelector(".root");


let currentTree;

function start(){
    currentTree = app();
    mount(root, currentTree);
};

export function update(){
    const nextTree = app();


    root.innerHTML="";
    mount(root, nextTree);
    currentTree = nextTree;
};

function mount(container, vdom){
    container.appendChild(render(vdom));
};


start();