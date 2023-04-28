// let billBefore = 203.00;



// function calculateTip(billBefore){
    
//     return (billBefore*0.2);

// }

// console.log("This is your tip calculated from $" +billBefore +": "+calculateTip(billBefore)); // returns amount to tip (40) based of the amount declared in billBefore(200)


// function getTotalBill(dollarAmount){

//     return(dollarAmount + (calculateTip(dollarAmount)))

// };

// console.log("Based off of the argument entered, the total for your bill including tip is: $"+getTotalBill(400));  // returns 480 ([400*0.2=80]+400) when given 400 as the argument amount

//// CODE ABOVE IS CODE PRIOR TO THE TYPESCRIPT CONVERSION ASSIGNMENT COPY PASTED BELOW

let billBefore: number = 203.00;
let tip:number = 0.2



function calculateTip(bill:number, tipPercentage:number):number{
    
    return (bill*tipPercentage);

}

console.log("This is your tip calculated from $" +billBefore +": "+calculateTip(billBefore,tip)); // returns amount to tip (40) based of the amount declared in billBefore(200)


function getTotalBill(bill:number, tipPercentage:number):number{

    return(bill + (calculateTip(bill, tipPercentage)))

};

console.log("Based off of the argument entered, the total for your bill including tip is: $"+getTotalBill(400,0.2));  // returns 480 ([400*0.2=80]+400) when given 400 as the argument amount



