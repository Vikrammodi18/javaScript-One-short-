function loginUserMessage(username="annonoums"){
    return `${username} is logged in`
}
// console.log(loginUserMessage("vikram"))

function calculateCartPrice(...totalPrice){

    console.log(totalPrice)
   let finalAmount = totalPrice.reduce((sum,val)=> sum+val,0)
   let tax =  (18*finalAmount)/100
    return {finalAmount,tax}
    
}

let {finalAmount,tax} = calculateCartPrice(200,300,400,500)
console.log(`ordered amount:${finalAmount}\ntax:${tax}`)
console.log(`total amount:${finalAmount+tax}`)

