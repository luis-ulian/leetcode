var minimumCost = function(cost) {
    let total = 0;
    cost.sort((a, b) => b - a);
    for(i=0; i < cost.length; i++){
            if(i % 3 !== 2){
            total += cost[i];
        }
    }
    
    return total;
};

console.log(minimumCost([1, 2, 3]));
console.log(minimumCost([6, 5, 7, 9, 2, 2]));