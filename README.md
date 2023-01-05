# Async JavaScript

### Sync JS:-

 Each command must complete before the next command can execute. No two commands can be running at the same time as each other.

Example : - for loops , console.log().

### Async JS: -

Code that can be run out of order. Allows a lengthy operation to start but finish at a later without blocking other code from running in the meantime.

## CallBack function: -

Example: -

let myFunction=function( ){

console.log(”I’m myFunction”)

}

let myFunction2=myFunction

myFunction2( ) —> It will console log “I’m myFunction”

### setTimeout function: -

Syntax: setTimeout(function name without parenthesis , time in ms)

filter: -

const peopleWithPets=people.filter(person⇒person.hasPet) //Inline function 

console.log(peopleWithPets)

## Analogy Behind Filer function: -

```jsx
const people=[
    {name:"Jack",hasPet:true},
    {name:"Jil",hasPet:false},
    {name:"Alice",hasPet:true},
    {name:"Bob",hasPet:false}
]

function filterArray(array,callback){
    const resultingArray=[];
    for(let word of array){
        const result=callback(word);
        if(result===true){
            resultingArray.push(result);
        }
    }
    return resultingArray;
}

const answer=filterArray(people,function callback(item){
    return item.hasPet;
});
console.log(answer);
```

# Promises: -

Example: -In a Job Interview “ We will let you know within a week “.

There are some states associated with the promises: -

  Pending : 

The promise has yet to be completed.

  Fulfilled :

The promise was completed as promised.

  Rejected :

The promise was not completed as promised.

Map: -

```jsx
const voters=[
    {name:"Joe",email:"joe@joe.com",voted:true},
    {name:"Jane",email:"jane@jane.com",voted:true},
    {name:"Bo",email:"bo@bo.com",voted:false},
    {name:"Bane",email:"bane@bane.com",voted:false},
]

const finalResult=voters.filter(voter=>voter.voted).map(voter=>voter.email);

console.log(finalResult);
```

## Async/Await : -

Makes asynchronous code appear to be synchronous.

async goes before the function.

await goes before a method/function that returns a promise. 

## When is a promise rejected?

   A promise becomes rejected if an error i thrown inside any of the .then() blocks or if a programmer manually calls.

Promise.reject( );

We can easily handle the errors using catch and throw.

Code Snippet: -

```jsx
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=bfhsbhfbzs')
  .then((response) => response.json())
  .then((data) =>{
    console.log(data);
    throw Error("i'm doing an error")
  })
  .catch(err => {
    console.log("Something went wrong");
    //In this part we can handle the errors
    //Like we can add a defalt image here in case the unsplash image is not found
  })
```

We can include the catch method like this ,

```jsx
let authorEl=document.getElementById("author-el");
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then((response) => response.json())
  .then((data) =>{
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    authorEl.textContent=`By: ${data.user.name}`;
  })
  .catch(err =>{
    document.body.style.backgroundImage = `url(${default image url})`;
    //Report the error to some kind of service
  })
```
