const moduleA = require("../moduleA");

class Node{
    // properties
    #baseURI;
    #childNodes;
    #firstChild;
    #lastChild;
    #nodeName;
    #nodeType;
    #nodeValue;
    #parentNode;
    #textContent;
    // Methods
    constructor(){
        this.#nodeType = {
            "ELEMENT_NODE": 1,
            "ATTRIBUTE_NODE": 2,
            "TEXT_NODE": 3,
            //...
        }
    }
    #appendChile(childNode){

    }
    #cloneNode(){

    }
    #contains(node){

    }
}

moduleA.exports = new Node();