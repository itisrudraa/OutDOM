import {h} from "./h.js";

function app(){
    return h("div", {id: "container",class: "class1"}, 
    h("h1", null, "OutDOM"),
    h("h2", null, "A mini Virtual DOM library built form scratch"));
};

export default app;