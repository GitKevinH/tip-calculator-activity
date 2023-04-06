

let billBefore = 203.00;

function calculateTip(billBefore){
    
    return (billBefore*0.2);

}

console.log("This is your tip calculated from $" +billBefore +": "+calculateTip(billBefore)); // returns amount to tip (40) based of the amount declared in billBefore(200)


function getTotalBill(dollarAmount){

    return(dollarAmount + (calculateTip(dollarAmount)))

};

console.log("Based off of the argument entered, the total for your bill including tip is: $"+getTotalBill(400));  // returns 480 ([400*0.2=80]+400) when given 400 as the argument amount



