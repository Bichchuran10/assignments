const posts=[
    {title:'Post One',body: 'This is Post One'},
    {title:'Post Two',body: 'This is Post Two'},
]

function getPosts()
{
    setTimeout(() => {
        let output=""
        posts.forEach((post)=>{
            output+= `<li> ${post.title} </li>`
            console.log(post.title)
        });
        document.body.innerHTML=output
    },1000);
}


function createPost(post)
{
    return new Promise((resolve,rejet)=>{
        
        
        setTimeout(()=>{
            posts.push(post)

            const error=false
            if(!error)
            {
                resolve()
            }
            else
            {
                rejet("Error : Something went wrong")
            }
        },2000);


    })
   
}
//getPosts()

async function init()
{
await createPost({title:'Post Three', body:'This is post three'})
getPosts()

await deletePosts()
getPosts()

await deletePosts()
getPosts()
await deletePosts()
getPosts()
await deletePosts() //it will throw an error which states array is empty
}
init()


function deletePosts()
{
    const deletePost= new Promise((resolve,rejet)=>{

        setTimeout(()=>{

            if(posts.length>0)
            {
                const lastElement=posts.pop()
                resolve(lastElement)
                console.log(lastElement, "has been deleted")
            }
            else
            {
                rejet("Error : Array is empty")
            }


        },1000)

    })
    return deletePost;
}
