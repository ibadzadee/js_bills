// const Xedice = {
//     name: "Sara",
//     mass : 50,
//     height: 1.65, 
//     bki : function bki() {
//         return this.mass / this.height**2
// }
// }

// console.log(Xedice, Xedice.bki())


const bills = [22, 295, 176, 440, 37, 105, , 10, 1100, 86]
function myFunction(bexsis){
    const tips =[]
    const totals = []
    for (let i = 0 ; i < bexsis.length; i++){
        if (bills[i] >50 && bills[i] < 300){
            tips.push(bexsis[i]*0.15)
            totals.push(bexsis[i]+ bexsis[i]*0.15)
        }
        else{
            tips.push(bexsis[i]*0.2)
            totals.push(bexsis[i]+ bexsis[i]*0.2)
        }
    }
    console.log(tips)      
    console.log(totals)      

}

myFunction(bills)