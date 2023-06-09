// Object inside in array 
// use full in real life application

const users =[
    {userId:1, firstName: "Chirag", gender: "male"},
    {userId:2, firstName: "kishan", gender: "male"},
    {userId:3, firstName: "lisa", gender: "female"},
    {userId:4, firstName: "robin", gender: "male"}
];

console.log(users);
for(let user of users){
    console.log(user.firstName);
}

// Nested Destructuring
const [user1, user2,...rest] = users;
 console.log(user1,user2,rest);

 const [{firstName:name, userId:id}, , {gender:gender}] = users;
 console.log(name,gender,id);