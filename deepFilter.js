// fb

const deepFilter = (obj)=>{
    let filter  = {};
     return deepFiltering(obj, filter);
    

}
const deepFiltering = (obj, filter)=>{
    for(let [key,value] of Object.entries(obj)){
        // if(typeof value == 'number'  && value > 0){
        //     filter[key] = value;
        // }
        if(typeof value == 'string'){
            filter[key] = value;
        }
        if(typeof value == 'object'){
        filter[key] = deepFilter(value, filter);
        if(JSON.stringify(filter[key]) == JSON.stringify({})){ // check for empty obj and remove that key from filter
            delete filter[key];
        }
        }
    }
    return filter;
}

const ob = {
    a: 1,
    b: {
     c: 2,
      d: -3,
      e: {
        f: {
          g: -4,
        },
      },
      h: {
        i: 5,
        j: 6,
      },
    }
};

const input = {
    a: 1,
    b: {
      c: 'Hello World',
      d: 2,
      e: {
        f: {
          g: -4,
        },
      },
      h: 'Good Night Moon',
    },
};

let ans = deepFilter(input);
console.log(ans);