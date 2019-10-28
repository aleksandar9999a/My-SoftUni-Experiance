// function spy(object, method) {
//     let originalFunction = object[method];

//     const res = {
//         count: 0
//     }

//     object[method] = function () {
//         res.count++;
//         return originalFunction.apply(this, arguments);
//     }

//     return res;
// }

function spy(object, method) {
    let res = {
        count: 0
    }

    object.res = res;

    return new Proxy(
        object, {
            get: function (obj, prop) {
                if (Reflect.get(obj, prop)) {
                    if (method === prop) {
                        res.count++;
                    }
                    return Reflect.get(obj, prop);
                }else{
                    console.log(`Prop ${prop} not found!`);
                    return () => { };
                }
            }
        }
    )
}


let obj = {
    method:()=>console.log("invoked")
}
let spy1 = spy(obj,"method");

obj.method();
obj.method();
obj.method();

spy1.method();
spy1.method();
spy1.method();

console.log(spy1.res);




// console.log(spy1) 

// let spy2 = spy(console,"log");

// console.log(spy2); // { count: 1 }
// console.log(spy2); // { count: 2 }
// console.log(spy2); // { count: 3 }


