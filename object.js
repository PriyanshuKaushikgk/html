 
//  const complexData = [
//           {
//             id: 1,
//             name: "John Doe",
//             age: 30,
//             address: {
//               street: "123 Main St",
//               city: "Anytown",
//               country: "USA",
//             },
//             orders: [
//               { orderId: "A123", amount: 50.75, status: "completed" },
//               { orderId: "B456", amount: 30.25, status: "pending" },
//             ],
//           },
//           {
//             id: 2,
//             name: "Jane Smith",
//             age: 25,
//             address: {
//               street: "456 Oak St",
//               city: "Othercity",
//               country: "USA",
//             },
//             orders: [
//               { orderId: "C789", amount: 100.5, status: "completed" },
//               { orderId: "D012", amount: 5.2, status: "completed" },
//             ],
//           },
//         ] 



// <!-- 
// // 1. Filter users who are aged 25 or younger.


// let data = complexData.filter((item)=>{
//     return((item.age))<=25
// }) 
// console.log(data);



// // 2. Map the array to get an array of user names.

// let y= complexData.map((item)=>{
//  console.log(item.name);
// })



// // 3. Filter orders with an amount greater than 50.



// let orderAmount=complexData.map((item)=>{
//     let data = item.orders.filter((ele)=>{
//     return( ele.amount)>50
// }) 
// return data;
// })
// console.log(orderAmount);


// // 4. Map the array to get an array of order IDs.

// let yz= complexData.map((item)=>{
//     return item.orders.map((order)=>{
//     return order.orderId;
//     })
// })
// console.log(yz);


// // 5. Filter users who have at least one order with a status of 'pending'.

// let f = complexData.map((item)=>{
//             return item.orders.filter((item)=>{
//                 return item.status == "pending";
//             })
//         })
//         console.log(f);


// // 6. Map the array to get an array of objects containing user names and their total order amounts.
// let g = complexData.map((item)=>{
//         return item.orders.map((item)=>{
//             return item.orderAmount;
//         })
//     })
//         console.log(g);

// // 7. Filter orders with an amount between 30 and 70.
// let h = complexData.flatMap((item)=>{
//         return item.orders.filter((item)=>{
           
//             return item.amount>30 && item.amount<70;
//         })
//     })
//      console.log(h);

// // 8. Map the array to get an array of objects containing user names and their completed order IDs.
// let i = complexData.map((item)=>{
//             return item.orders.map((order)=>{
//                 return order.orderId;
//             }) 
//       })
//        console.log(i);

//       let j = complexData.map((item)=>{
//             return item.orders.filter((item)=>{
//                 return item.status == "completed";
//             })
//       })
//         console.log(j);

// // 9. Filter users who live in the 'USA' and have at least one order with an amount greater than 50.
// let k = complexData.filter((item)=>{
//           return item.address.country == "USA" && item.orders.filter((item)=>{
//             return item.amount>50;
//           })  
//               })
//         console.log(k);


//     </script>
// </body>
// </html>
// [11:26 AM, 5/20/2024] Manish Regex: <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script>
        
// const complexData = [
//           {
//             id: 1,
//             name: "John Doe",
//             age: 30,
//             address: {
//               street: "123 Main St",
//               city: "Anytown",
//               country: "USA",
//             },
//             orders: [
//               { orderId: "A123", amount: 50.75, status: "completed" },
//               { orderId: "B456", amount: 30.25, status: "pending" },
//             ],
//           },
//           {
//             id: 2,
//             name: "Jane Smith",
//             age: 25,
//             address: {
//               street: "456 Oak St",
//               city: "Othercity",
//               country: "dausa",
//             },
//             orders: [
//               { orderId: "C789", amount: 35.5, status: "completed" },
//               { orderId: "D012", amount: 75.2, status: "completed" },
//             ],
//           },
//         ]

//         // que1. Filter users who are aged 25 or younger.
//         // Ans.
//         let b = complexData.filter((item)=>{
//             return item.age<=25; 
//         })
//         console.log(b);

//         // que.2 Map the array to get an array of user names.
//         // Ans.Ans
//         let c = complexData.map((item)=>{
//             return item.name;
//         })
//         console.log(c);

//         // que.3 Filter orders with an amount greater than 50.
//         // Ans.An
//         let d =complexData.map((item)=>{
//             return item.orders.filter((item)=>{
//                 return item.amount>50;
//             })
//         })
//         console.log(d);

//         // que.4 Map the array to get an array of order IDs.
//         // ans.
//         let e = complexData.map((item)=>{
//             return item.orders.map((order)=>{
//                 return order.orderId;
//             })
//         })
//         console.log(e)

//         // que.5 Filter users who have at least one order with a status of 'pending'.
//         // 
//         // ans
//         let f = complexData.map((item)=>{
//             return item.orders.filter((item)=>{
//                 return item.status == "pending";
//             })
//         })
//         console.log(f);

//         // que.6 Map the array to get an array of objects containing user names and their total order amounts.
//     //    ans
//     // let g = complexData.map((item)=>{
//     //     return item.orders.map((item)=>{
//     //         return item.orderAmount;
//     //     })
//     // })
//     //     console.log(g);

//     // que.7 Filter orders with an amount between 30 and 70.
//     // ansn
//     let h = complexData.flatMap((item)=>{
//         return item.orders.filter((item)=>{
           
//             return item.amount>30 && item.amount<70;
//         })
//     })
//      console.log(h);

//     //  que.8 Map the array to get an array of objects containing user names and their completed order IDs.
//     // ans 
//       let i = complexData.map((item)=>{
//             return item.orders.map((order)=>{
//                 return order.orderId;
//             }) 
//       })
//        console.log(i);

//       let j = complexData.map((item)=>{
//             return item.orders.filter((item)=>{
//                 return item.status == "completed";
//             })
//       })
//         console.log(j);
//         // que.9 Filter users who live in the 'USA' and have at least one order with an amount greater than 50.
//         // ans.
        // let k = complexData.filter((item)=>{
        //   return item.address.country == "USA" && item.orders.filter((item)=>{
        //     return item.amount>50;
        //   })  
        //       })
        // console.log(k); 

        // let [a,b,c] = [10,20,30];
        // console.log(a)
        // console.log(b)
        // console.log(c)


        // let [a= "sharma",b=a] = ["aman"]
        // console.log(a,b)

        // let a = [10,20,30];
        // let b = [40,50,60];
        // let c = [...a,...b]
        // console.log(c)


        // let {name,age,city} = {name:"aman",age:25,city:"jaipur"}
        // console.log(name)
        // console.log(age)
        // console.log(city)
        


        let a = {
          username: "mohit",
           email:"mohit@gmail.com"
           
        }

        let b = {
          // ...a,
             password:"mohit@3033",
             city: "jaipur"
        }
        // console.log(b)



        let c = {
          ...a,
          ...b,
        }
        console.log(c)

        
      

 