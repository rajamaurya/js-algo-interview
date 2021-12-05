

class Documents{
    #nodes;
    constructor(){
        this.#nodes = [];
    }
    #getElementsByClassName(root, className){
        const dfsRes = this.dfs(root, className);
        //const bfsRes = this.bfs(root, className);
        return dfsRes
    }
    getElementsByClassName(root, className){
        return this.#getElementsByClassName(root, className)
    }
    bfs(root, className){
        let currentNode = root;
        let results = [];
        let q = [];
        q.push(currentNode);
        while(q.length){
            let node = q.shift();
            let classes = node.classList;
            if(classes.contains(className)){ // classes.contains(className)
                results.push(node);
            }
            for(let i = 0; i < node.children.length; i++){
                 q.push(node.children[i])
            }
        }
        return results;
    }
    dfs(root, className){
        const currentNode  = root;
        let classes = currentNode.className.split('');// currentNOde.classList; return = [of classes]
        if(classes.indexOf(className)!==-1){
            this.#nodes.push(currentNode)
        }
        for(let i = 0; i < currentNode.children.length; i++){
            this.dfs(currentNode.children[i], className)
        }
        return this.#nodes;
    }
   
}


// moduleA.exports = new Document(); // pass Element, Class Name

let doc = new Documents();
let root =document.getElementById("root");

let resDOC = doc.getElementsByClassName(root, "a");
console.log(resDOC)