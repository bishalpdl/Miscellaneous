const add = function(a,b){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (a<0 || b<0){
                return reject('No. must to non-negative.')
            }
            resolve (a +b)
        },2000)
    })
}

const doWork = async(a) =>{
    const sum = await add(2,3)
    const sum2 = await add(sum, 5)
    const sum3 = await add(sum2,2)
    return sum3
}

doWork().then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log('error' , e)
})