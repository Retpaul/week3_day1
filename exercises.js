

const array1 = [1,2,3,4,5]
const multiplyBy3 = array1.map(item=>
    item*3
)

const ages = [18,15,20,25,30]
const greaterThan20 = ages.filter(age=> age > 20)

const callbackFun=()=>{
    console.log("Hello")
}
function runTwice(callback){
    callback()
    callback()
}
runTwice(callbackFun)