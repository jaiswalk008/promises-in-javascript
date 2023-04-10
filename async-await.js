//using promises
console.log('Person 1: Shows ticket')
console.log('Person 2: Shows ticket')

const promiseWifeBringingTicks = new Promise( (resolve,reject)=> {
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

const getPopCorn = promiseWifeBringingTicks.then( (t)=>{
    console.log('husband: should we go in?');
    console.log('wife: no I am hungry');
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
});
const getButter = getPopCorn.then( (t)=>{
    console.log('husband: I have the popcorn');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve,reject) => resolve(`${t} butter`))
});
const getColdDrinks = getButter.then((t)=>{
    console.log('husband: I have the coldrink');
    console.log('wife: lets go then');
    return new Promise ((resolve,reject) => resolve(`${t} coldrink`))
})
getColdDrinks.then((t)=>console.log(t));

console.log('Person 4: Shows ticket');
console.log('Person 5: Shows ticket');

//async and await


const preMovie = async () =>{
    
    const promiseWifeBringingTicks = new Promise( (resolve,reject)=> {
        setTimeout(()=>{
            resolve('ticket');
        },6000)
    });
    
    const getPopCorn = new Promise((resolve,reject) => resolve(` popcorn`));
    const getButter = new Promise((resolve,reject) => resolve(`butter`));
    const getColdDrinks = new Promise ((resolve,reject) => resolve(`coldrink`));
    let ticket = await promiseWifeBringingTicks;
    console.log('-----------------Async/Wait-----------------')
    console.log('Person 1: Shows ticket')
    console.log('Person 2: Shows ticket')
    console.log('wife: I have the '+ticket);
    console.log('husband: should we go in?');
    console.log('wife: no I am hungry');
    let popcorn = await getPopCorn;
    console.log('husband: I have some'+popcorn);
    console.log('wife: I need butter on my popcorn');
    let butter = await getButter;
    console.log('husband: I have the butter');
    console.log('wife: I also want coldrink');
    const coldrink = await getColdDrinks;
    console.log('husband: I have the coldrink');
    console.log('wife: lets go then');
    
    return ticket;
    
}

preMovie().then((t) =>{
    console.log(`Person 3: shows ${t}`)
    console.log("--------------blogs------------------");
});



let blogs=[];
const blogFunction = async () =>{
    function create1stBlog() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                blogs.push({title: 'BLOG1'});
                resolve();
            }, 3000)
        }) 
    }
    function create2ndBlog() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                blogs.push({title: 'BLOG2'});
                resolve()
            }, 2000)
        }) 
    }
    
    
    function deleteBlog(){
       return new Promise( (resolve,reject) => {
           if(blogs.length){
               setTimeout( ()=>{
                   const last = blogs.pop();
                   resolve(last);
               },1000)
           }else{
               setTimeout( ()=>{
                   reject("ERROR")
               },1000)
           }
       })
    }
    await create1stBlog();
    await create2ndBlog();
    let poppedElement1;
    try{
        poppedElement1 = await deleteBlog();
        console.log('poppedElement: '+poppedElement1.title);
    } catch(e){
        console.log(e);
    }
    let poppedElement2;
    try{
        poppedElement2 = await deleteBlog();
        console.log('poppedElement: '+poppedElement2.title);
    } catch(e){
        console.log(e);
    }
    let poppedElement3;
    try{
        poppedElement3 = await deleteBlog();
        console.log('poppedElement: '+poppedElement3.title);
    } catch(e){
        console.log(e);
    }

}

blogFunction();
const posts= [];
let i=1;
const promises = async () =>{
    function create4thPost() {
        return new Promise((resolve) => {
            setTimeout(()=>{
                posts.push({title:'post 4',body:"This is post four"});
                resolve();
            },3000)
        })
    }
    function create5thPost() {
        return new Promise((resolve) => {
            setTimeout(()=>{
                posts.push({title:'post 5',body:"This is post five"});
                resolve();
            },6000)
        })
    }
    function display(){
        return new Promise( (resolve,reject) => {
            if(posts.length){
                //display all the posts
                setTimeout (function(){
                    let userActivity ='At '+new Date();
                    console.log(userActivity);
                    resolve(posts);
                },2500)
            }else{
                const err = new Error ("Error: Array is Empty")
                reject(err);
            }
        })
    }
    try{
        let post = await display();
    }catch(e){
        console.log(e.message);
    }
    await create4thPost();
    try{
        let post = await display();
        console.log(post)
    }catch(e){
        console.log(e.message);
    }
    await create5thPost();
    try{
        let post = await display();
        console.log(post)
    }catch(e){
        console.log(e.message);
    }
}
promises();

