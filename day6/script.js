let ar=[1,2,34,56,7];
// let newar=ar.map((x)=>x*2);
// console.log(newar);
// let newar=ar.filter((x)=>x%2==0).map((x)=>x*3);
//let newar=ar.filter((x)=>x%2==0).map((x)=>x*4).reduce((x,y)=>x+y,0)
// console.log(newar)
const student=[
    {name:"a",score:10},
    {name:"b",score:20},
    {name:"c",score:30},
    {name:"d",score:40}
    
];
let newar=student.map((students)=>students.score*2).filter((score)=>score>=60).reduce((x,y)=>x+y,0);
console.log(newar)