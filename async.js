console.log("Person 1 shows ticket")
console.log("Person 2 shows ticket")

const preMovie=async()=>{

    const wifeBringingTickets= new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve('ticket')
        },3000)
    })

    const getPopcorn= new Promise((resolve,reject)=>{
        resolve('popcorn')
    })

    const getButter=new Promise((resolve,reject)=>{
        resolve('butter')
    })

    const getColdDrinks=new Promise((resolve,reject)=>resolve('Cold Drinks'))

    let ticket=await wifeBringingTickets

    //console.log(`wife: I have the ${ticket}`)
    ///console.log(`husband: lets goooooo`)
    //console.log('wife: No I am hungry')

   // let popcorn=await getPopcorn
    //console.log(`husband: I got ${popcorn}`)
    //console.log(`husband: we should go in`)
    //console.log(`wife: I need butter`)

    //let butter= await getButter
    //console.log(`husband: I have the ${butter}`)
    //console.log(`husband: anything else darling`)
    //console.log(`wife: lets go we are getting late`)
    //console.log(`husband: Thank you for reminding *grins* `)
   // console.log(`wife: wait, I need cold drinks`)

    //let coldDrinks=await getColdDrinks

    //console.log(`husband: Ok, I got the ${coldDrinks} for you darling`)
    //console.log(`wife: Now, we can go in`)

    let [popcorn,butter,coldDrinks]= await Promise.all([getPopcorn,getButter,getColdDrinks])
    
    console.log(`wife: I need food`)
    console.log(`husband: ${popcorn},${butter},${coldDrinks} everything's here`)
    console.log(`husband: lets goo in`)

    


    //try catch 
    // let ticket ;
// try{
//      ticket = await promiseWifiBringingTicks;
// }catch (e){
//     ticket = 'sad face';

    return ticket


}

preMovie().then((m)=>console.log(`person 3: shows the ${m}`))
console.log('person 4 shows the ticket ')
console.log('person 5  shows the ticket ')