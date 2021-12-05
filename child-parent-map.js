class ChildParentMap{
    constructor(){
         this.has_parent = {};
         this.value = null;
         this.children = [];
    }
    
   add(list){
    
     for(let arr of list){
          this.has_parent[arr[1]]? this.has_parent[arr[1]].push(arr[0]):this.has_parent[arr[1]]  = [arr[0]]
      }
      let keys = Object.keys(this.has_parent);
      let vals = Object.values(this.has_parent);
      let master = {}
      console.log(this.has_parent)
      for(let [key, value] of Object.entries(this.has_parent)){
          let temp  = {};
           for(let val of value){            
                temp[val] = keys.indexOf(val) !== -1? master[val]: {};
             }
             master[key] = temp;
      }
      let lengths = []
      for(let key in master){
          lengths.push(Object.values(master[key]).length);
      }
      console.log(lengths)
      return master;
   }
   isParent(name){

   }
}


const cpmap = new ChildParentMap();
let res = cpmap.add([['dog', 'mammal'],
["shark", "fish"],
["cat", "mammal"],
["mammal", "animal"],
['fish', 'animal']])
console.log(res)