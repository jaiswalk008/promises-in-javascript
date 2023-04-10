const posts= [ {title:'post 1',body:"This is post one"},
{title:'post 2',body:"This is post two"}, {title:'post 3',body:"This is post three"}
];
let i=1;
function display(){
    return new Promise( (resolve,reject) => {
        if(posts.length){
            //display all the posts
            setTimeout (function(){
                let userActivity = document.createElement('h4');
                userActivity.innerHTML='At '+new Date();
                document.getElementById('parent').appendChild(userActivity);
                posts.map( (newPost) => {
                    let newLine = document.createElement('h3');
                    newLine.innerHTML=newPost.title;
                    document.getElementById('parent').appendChild(newLine);
                })
                resolve();
            },2500*(i++))
        }else{
            const err = new Error ("Error: Array is Empty")
            reject(err);
        }
    })
}
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

Promise.all([display(),create4thPost(),display(),create5thPost(),display()])


