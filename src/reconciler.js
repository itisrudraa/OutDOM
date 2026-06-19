import { render } from "./renderer.js";

function reconcile(parentDom, domNode, currentTree, nextTree){
    if(!nextTree){
        domNode.remove();
    }
    else if(!currentTree){
        parentDom.appendChild(render(nextTree));
    }
    else if(typeof currentTree==="string" && typeof nextTree==="string"){
        if(currentTree!=nextTree){
            parentDom.replaceChild(render(nextTree), domNode);
        }
    }
    else if(currentTree.type!=nextTree.type){
        parentDom.replaceChild(render(nextTree), domNode);
    }
    else{
        //check props
        Object.entries(nextTree.props).forEach(([key, value]) =>{
            if(currentTree.props[key]!=value){
                if(key.startsWith("on")){  
                    const event = key.substring(2).toLocaleLowerCase();
                    domNode.removeEventListener(event, currentTree.props[key]);
                    domNode.addEventListener(event, value);
                }
                else
                    domNode.setAttribue(key, value);
            }
        });
        Object.entries(currentTree.props).forEach(([key, value]) => {
            if(!(key in nextTree.props)){
                if(key.startsWith("on")){  
                    const event = key.substring(2).toLocaleLowerCase();
                    domNode.removeEventListener(event, value);
                }
                else 
                    domNode.removeAttribute(key);
            }
        });

        //check children
        for(let i=0; i<Math.max(currentTree.children.length, nextTree.children.length); i++){
            reconcile(domNode,domNode.childNodes[i], currentTree.children[i], nextTree.children[i]);
        }
    }
}

export default reconcile;
