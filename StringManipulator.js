// can either use object or map.
// one way
// const strMainpulator = (string)=>{
//  let map = new Map();
//  for(let i = 0; i < string.length; i++){
//      map.has(string[i])?map.set(string[i], map.get(string[i]) + 1): map.set(string[i], 1)
//  }
//  let res = '';
//  let vls = map.values();
//  let m  = Math.max(...vls);
//  res = manipulator(map,m, res);
//  return res;
// }
// const manipulator = (map , max, res)=>{
//      if(max == 1){
//           for(let key of map.keys()){
//               res += key
//          }
//          return res;
//      }
//     for(let key of map.keys()){
//           if(map.get(key) == max){
//               res += key;
//               map.delete(key);
//               let vls = map.values();
//               let m  = Math.max(...vls);
//               return manipulator(map, m, res )
//           }
//     }
// }

// another way
const strMainpulator = (string)=>{
    let map = new Map();
    for(let i = 0; i < string.length; i++){
        map.has(string[i])?map.set(string[i], map.get(string[i]) + 1): map.set(string[i], 1)
    }
    let res = '';
    // let sortedMap = [...map.entries()].sort((a,b)=> a[1] - b[1]);
    // console.log(sortedMap)let sortedMap = [...map.entries()].sort((a,b)=> a[1] - b[1]);
    let sortedMap = [...map.entries()].sort((a,b)=> b[1] - a[1]);
    console.log(sortedMap)
    sortedMap.forEach(map=> res+=map[0])
    return res;
   }
const res = strMainpulator("hello world");
console.log(res);
