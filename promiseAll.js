//let promise1=Promise.resolve("Hello world")
//let promise2=10
//let promise3=new Promise((resolve,reject)=>{
    //setTimeout(resolve,1000,"Goodbye")
//})


//Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values))


const posts=[
    {title:"Post One",body:"This is post one",createdAt: new Date().getTime()},
    {title:"Post Two",body:"This is post two",createdAt: new Date().getTime()}
]
let intervalId=0
function getPosts()
{
    clearInterval(intervalId)
    intervalId=setInterval(()=>{
        let output=""
        posts.forEach((post)=>{
            let createdDate=new Date(post.createdAt)
            output+=`<li>${post.title} --created at ${createdDate}--- last updated at ${(new Date().getTime()-post.createdAt)/1000} seconds ago---- last active at ${post.lastActivityTime}</li>`
        })
        document.body.innerHTML=output

    },1000)
}


function createPosts(post)
{
    return new Promise((resolve,reject)=>{
       
        setTimeout(() => {
            posts.push({...post,createdAt:new Date().getTime()})
            updateLastUserActivityTime()
            console.log(posts)

            const error=false;
            if(!error)
            {
                resolve()
            }
            else
            {
                reject("Error: Something went wrong")
            }
        }, 2000);
      

    })
   
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.forEach((post)=>
            {
                    
                    post.lastActivityTime=new Date().toLocaleDateString()
            })
            resolve()
        },1000)
    })
}

function deletePosts()
{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let lastelement=posts.pop()
            if(posts.length>0)
            {
                resolve(lastelement)
            }
            else{
                reject("Error : Array is Empty")
            }
        },4000)
       

    })
}
//getPosts()

Promise.all([createPosts({title:'Post three',body:'This is post three'}),updateLastUserActivityTime()])
.then(()=>{
    getPosts()
    deletePosts().then(()=>{
        getPosts()
       console.log(posts)
    }).catch((err)=>console.log(err))
})
.catch((err)=>console.log(err))

