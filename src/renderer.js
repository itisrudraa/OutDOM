// This file contains functions to render the virtual DOM


//function  to convert from tree object to html string
export function renderToString(vdom){
    if(typeof vdom === "string") return vdom;
    return `
        <${vdom.type}> 
            ${
                vdom.children.map((child) => {
                    return renderToString(child);
                }).join("")
            }
        </${vdom.type}>
    `;
};

export function render(vdom){
    const dom = (typeof vdom === "object")? document.createElement(vdom.type) : document.createTextNode(vdom);

    if(typeof vdom === "object"){
        vdom.children.forEach((child) => {
            dom.appendChild(render(child));
        });
    }

    return dom;
};