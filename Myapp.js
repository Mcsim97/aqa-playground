
function getPrice(orderAmount) {
    if (orderAmount >=1000) {
        return 0; 
    }
return {
    deliverycharge: "$50",
    tax:"$10"
} ;
}

console.log(getPrice(500));