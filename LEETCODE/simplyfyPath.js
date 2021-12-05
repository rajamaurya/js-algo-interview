/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let stack = [];
    if(path[0] !== '/'){
        return "/";
    }
    let str = path.split("/");
    for(let i = 0; i < str.length; i++){
        switch(str[i]){
            case "":
            case '.':
                break;
            case "..":
                stack.pop();
                break;
            default: 
                stack.push('/'+str[i]);
        }
    }
    if(stack.length == 0){
        return '/';
    }
    return  stack.join('')
};