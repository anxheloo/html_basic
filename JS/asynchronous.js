/*



In summary, callbacks are the oldest mechanism for handling asynchronous operations in JavaScript, 
Promises provide a cleaner way to handle asynchronous operations, 
and Async/await provides an even cleaner way to write asynchronous code that looks and behaves like synchronous code.






------------------------------------------------------------------------------------------------------------------------------------
// synchronous - code runs from top to bottom, if line 2 of the code takes a lot of time, all the code after needs to wait for that.
------------------------------------------------------------------------------------------------------------------------------------
console.log(" I ");
console.log(" eat ");
console.log(" spoon ");
console.log(" ice cream ");
console.log(" with a ");

------------------------------------------------------------------------------------------------------------------------------------
// asynchronous - we specify the order, code will run
------------------------------------------------------------------------------------------------------------------------------------
console.log(" I ");
console.log(" eat ");
// after 3 seconds we print the 'spoon' line
setTimeout(() => {
  console.log(" spoon ");
}, 3000);
console.log(" ice cream ");
console.log(" with a ");


------------------------------------------------------------------------------------------------------------------------------------
// callbacks - calling a function inside another function
------------------------------------------------------------------------------------------------------------------------------------

function one(call2){ 
  console.log(" Step 1 Completed. Please call step 2.")
  call2();
}

function two(){ 
  console.log(" Step 2 ") 
}

//Now we will make a connection of function two() inside function one()
one(two)

*/

/* 
---------------------------------
ICE CREAM EXAMPLE WITH CALLBACKS
---------------------------------

#1 Place Order   -> 2 seconds
#2 Cut the Fruit -> 2 seconds
#3 Add Water and Ice -> 1 second
#4 Start the machine -> 1 second
#5 Select Container -> 2 seconds 
#6 Select Toppings -> 3 seconds
#7 Serve Ice Cream -> 2 seconds


//1.Client needs to choose ingridients
let ingridients = {
  Fruits : ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  Liquid : ['Water', 'Ice'],
  Holder : ['Cone', 'Cup', 'Stick'],
  Toppings : ['Chocolate', 'Peanuts']
}

//For the client to choose ingridients and the order to take place we need a variable.
let order = (fruit_name, callProduction) => {
  setTimeout(() => {
    console.log(`${ingridients.Fruits[fruit_name]} was selected!`);
    callProduction();  //We write this function inside the setTimout function cuz other wise it will wait 2 sec for console.log, and callProduction function first.
  }, 2000)
  
}

let production = () => {
  setTimeout(()=>{
    console.log("Production has Started!")

    setTimeout(()=>{
      console.log("The fruit has been Chopped!")
  
      setTimeout(()=>{
        console.log(`${ingridients.Liquid[0]} & ${ingridients.Liquid[1]} added! `)

        setTimeout(()=>{
          console.log("Machine Started!")

          setTimeout(()=>{
            console.log(`${ingridients.Holder[1]} has been selected!`)

            setTimeout(()=>{
              console.log(`${ingridients.Toppings[0]} is selected!`)

              setTimeout(()=>{
                console.log('Serve IceCream')
              },2000)
            },3000)
          },2000)
        },1000)
      },1000)
    }, 2000)
  }, 0000)

}

order(0, production);
*/


/* 
------------------------------------------------------------------------------------------------------------------------------------
PROMISES - provide a cleaner and more readable way to handle asynchronous operations than callbacks.
------------------------------------------------------------------------------------------------------------------------------------

let ingridients = {
  Fruits : ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  Liquid : ['Water', 'Ice'],
  Holder : ['Cone', 'Cup', 'Stick'],
  Toppings : ['Chocolate', 'Peanuts']
}

let is_shop_open = true;

let order = (time, work) => {
  return new Promise( (resolve, reject) => {
    if(is_shop_open){
      setTimeout(()=>{
        resolve( work())
      },time)
    }
    else{
      reject( console.log("Our shop is closed!"))
    }
  })
}

order(2000, ()=> console.log(`${ingridients.Fruits[0]} was selected!`))

.then(()=>{
  return order(0000, ()=>console.log("Production has Started!"))
})


.then(()=> {return order(2000, ()=> console.log("The fruit has been Chopped!"))})


.then(() => { return order(1000, ()=> console.log(`${ingridients.Liquid[0]} and ${ingridients.Liquid[1]} added!`))})


.then( () => {return order(1000, () => console.log('Machine Started!'))})


.then( () => {return order(2000, () => console.log(`${ingridients.Holder[0]} has been selected!`))})


.then( () => {return order(3000, () => console.log(`${ingridients.Toppings[0]} has been added!`))})


.then( () => {return order(2000, () => console.log("Ice Cream Served!"))})


.catch(()=>console.log("Customer Left!"))  // THis will come into play when we cannot serve icecream to our customer.


.finally( () => console.log("DAY ENDED!"))
*/


/* 
-----------------------------------------------------------------------------------------------------------------------------------------
ASYNC/AWAIT - provides an even cleaner way to write asynchronous code
-----------------------------------------------------------------------------------------------------------------------------------------

let ingridients = {
  Fruits : ['Strawberry', 'Grapes', 'Banana', 'Apple'],
  Liquid : ['Water', 'Ice'],
  Holder : ['Cone', 'Cup', 'Stick'],
  Toppings : ['Chocolate', 'Peanuts']
}

let is_shop_open = true;


function time(ms){
  return new Promise((resolve, reject) => {
    if(is_shop_open){
      setTimeout(resolve, ms)
    }
    else{
      reject(console.log("Shop is Closed!"))
    }
  })
}

async function kitchen(){

  try {

    await time(2000)
    console.log(`${ingridients.Fruits[0]} is selected!`)

    await time(0000)
    console.log("Start the production!")

    await time(2000)
    console.log("Fruits are chopped!")

    await time(1000)
    console.log(`${ingridients.Liquid[0]} and ${ingridients.Liquid[1]} are added!`)

    await time(1000)
    console.log("Machine Started!")

    await time(2000)
    console.log(`${ingridients.Holder[0]} is selected!`)

    await time(3000)
    console.log(`${ingridients.Toppings[0]} is selected!`)

    await time(2000)
    console.log("IceCream Served!")
  }
  catch(error){
    console.log("customer left", error)
  }
  finally{
    console.log("Day ended, SHop is closed!")
  }
}

kitchen();


*/



/*
-----------------------------------------------------------------------------------------------------
ANOTHER EXAMPLE OF ASYNC/AWAIT
-----------------------------------------------------------------------------------------------------

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
*/