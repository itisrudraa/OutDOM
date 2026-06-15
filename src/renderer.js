
//function convert from tree object to html string 
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