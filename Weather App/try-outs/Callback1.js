// Example 1:
// var request1 = (place,callback)=>{
//     console.log('We recived location named' + place)
//     console.log('from here we send lan,lat = 12344,987.321')
//     callback(12344,987.321)
// }

// var request2 = (lan,lat)=>{
//     console.log('This is request2 \n data received are')
//     console.log(lan, lat)
// }

// request1('pokhara',request2)

//  Example 2:

var doThis = (a,b,callback)=>{
    console.log("sum is: ", a+b)
    callback(a,b)
}

doThis(3,10, (x,y)=>{
    if(x<y){
        console.log("smaller")
    }else{
        console.log("bigger")
    }
})