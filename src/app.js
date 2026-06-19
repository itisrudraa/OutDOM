import {h} from "./h.js";
import { update } from "./main.js";
import reconcile from "./reconciler.js";

let count = 0;
function app(){
    return h("div", {class: "container"}, 
        h("div", {class: "textcontent"}, 
            h("h1", null, "OutDom"),
            h("p", null, "A small Virtual DOM library built from scratch in javascript"),
            h("div", {class: "features"},
                h("ul", null, 
                    h("li", null, "Virtual DOM Representation"),
                    h("li", null, "Renderer"),
                    h("li", null, "Event Handeling"),
                    h("li", null, "Reconciliation"),
                    h("li", null, "prop diffing and patching"),
                    h("li", null, "Targated DOM updates"),
                )
            )
        ),
        h("div", {class: "counter"}, 
            h("h1", null, "Demo Counter"),
            h("p", null, `Count: ${count}`),
            h("button", {onclick: increment}, "+"),
            h("button", {onclick: decrement}, "-"),
            h("button", {onclick: reset}, "Reset"),
            
        )
    );
}



function increment(){
    count++;
    update();
};
function decrement(){
    count--;
    update();
};
function reset(){
    count=0;
    update();
};

export default app;