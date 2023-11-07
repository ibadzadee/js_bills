// const Xedice = {
//     name: "Sara",
//     mass : 50,
//     height: 1.65, 
//     bki : function bki() {
//         return this.mass / this.height**2
// }
// }

// console.log(Xedice, Xedice.bki())


// const bills = [22, 295, 176, 440, 37, 105, , 10, 1100, 86]
// function myFunction(bexsis){
//     const tips =[]
//     const totals = []
//     for (let i = 0 ; i < bexsis.length; i++){
//         if (bills[i] >50 && bills[i] < 300){
//             tips.push(bexsis[i]*0.15)
//             totals.push(bexsis[i]+ bexsis[i]*0.15)
//         }
//         else{
//             tips.push(bexsis[i]*0.2)
//             totals.push(bexsis[i]+ bexsis[i]*0.2)
//         }
//     }
//     console.log(tips)      
//     console.log(totals)      

// }

// myFunction(bills)




const bills = [22, 295, 176, 440, 37, 105,  10, 1100, 86]
function myFunction(bexsis){
    const tips =[]
    const totals = []
   
    for (let i = 0 ; i < bexsis.length; i++){
        let tip;
        if (bills[i] >50 && bills[i] < 300){
            tip = bills[i] * 0.15

        }
        else{
            tip = bills[i] * 0.2
        }
        tips.push(tip)
        totals.push(tip + bills[i])
    }

    let Sum = 0 ;

    for (let x =0; x<totals.length; x++){
            Sum += totals[x];
            // console.log(Sum);
    }

  
    let ortalama = Sum /totals.length
    return [tips, totals, ortalama]   

}

console.log(myFunction(bills))

let a

console.log();



bills.forEach (function(item, index){
    console.log(item , index)
})
//  burada arrow function yerine istediyim,iz function istifade ede bilerik.

const person ={
    name: "Sara",
    age: 20
}

for(const elemet in person){
    console.log(person[elemet])
}

let = myMap = bills.map((element) =>{
    return element
}
)

// for in , for of , forEach , map 