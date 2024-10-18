// sayhello=()=>{
// console.log("hello function");

// };
// console.log("start");
// setTimeout(sayhello,4000);
// console.log("end");
// console.log("satrt")
// setTimeout(()=>{
//     console.log("first task completed");
//     setTimeout(()=>{
//         console.log("second task complete")
//         setTimeout(()=>{
//             console.log("third");
//             setTimeout(()=>{
//                 console.log("fourth")
//             },4000);
//         },3000);
//     },2000);
// },1000);
// console.log("end");
// const mypromise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("data send success");
//     }
//     else{
//         reject("data failed to send");
//     }
// });
// mypromise
//     .then((message)=>console.log(message))
    // .catch((error)=>console.log("error in fetch"+error));
function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay)
    });
}
task("first task complete",1000)
 .then(()=>task("second",2000))
 .then(()=>task("third",3000));