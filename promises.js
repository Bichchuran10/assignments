const posts=[
    {title:"Post One", body:"This is post one",createdAt:new Date().getTime()},
    {title:"Post two",body:"This is post two",createdAt:new Date().getTime()}
]

function getPosts()
{
    setTimeout(()=>{
        let output=""
        posts.forEach((post,index)=>
        {
                output+=`<li> ${post.title} -last updated at ${(new Date().getTime() - post.createdAt)/1000} seconds ago </li>`
        })
        document.body.innerHTML=output
        //console.log("get post timer expired")

        },1000)

       
}

getPosts()

function createPosts(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            posts.push({...post,createdAt: new Date().getTime()})
            const error=false;
            if(!error)
            {
                resolve()
            }
            else{
                reject("Error : Something went wrong")
            }
    
    
            //console.log("create post timer expired")
    
        },2000)


    })
    
}

function deletePosts(post)
{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            if(posts.length>0)
            {
                const lastelement=posts.pop()
                resolve(lastelement)
                console.log("last post is deleted")
            }
            else
            {
                reject("Array is empty")  
            }

        },1000)
    })
}




createPosts({title:'Post three',body:"This is post three"})

createPosts({title:'Post Four',body:"This is post four"})
.then(()=>{
    getPosts();
    deletePosts().then(()=>{
        getPosts();
        deletePosts().then(()=>{
            getPosts();
            deletePosts().then(()=>{
                getPosts()
                deletePosts().then(()=>{
                    getPosts()
                    deletePosts().then(()=>{
                        getPosts()
                    }).catch((err)=>{ console.log("inside catch block",err,6)});
                }).catch((err)=>{console.log("error ",err,5)})
            }).catch((err)=>{console.log("error ",err,4)})
        }).catch((err)=>{console.log("error ",err,3)})
    }).catch((err)=>{console.log("error ",err,2)})
}).catch((err)=>{console.log("error ",err,1)})





