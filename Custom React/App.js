const mainContainer = document.getElementById("root");
const customElement = {
    type : "a",
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "Click me to visit Google" 
}

function elementFunction(element,container){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, element.props[prop])  
    } 
    container.appendChild(domElement);
}

elementFunction(customElement,mainContainer);