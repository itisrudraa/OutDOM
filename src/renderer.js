// This file contains functions to render the virtual DOM


// Render a virtual DOM tree into an HTML string
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

// Render a virtual DOM tree into real DOM nodes
export function render(vdom){
    const dom = (typeof vdom === "object")? document.createElement(vdom.type) : document.createTextNode(vdom);

    if(typeof vdom === "object"){
        //add props
        Object.entries(vdom.props).forEach(([key, value]) => {
            if(key.startsWith("on")){  
                const event = key.substring(2).toLocaleLowerCase();
                dom.addEventListener(event, value); //handle events
            }
            else{     
                dom.setAttribute(key, value);
            }
        });
        //add children
        vdom.children.forEach((child) => {
            dom.appendChild(render(child));
        });
    }

    return dom;
};