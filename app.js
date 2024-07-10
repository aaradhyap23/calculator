function perform_operation(exp) {
    nums = exp.match(/[0-9]+/g);
    switch(exp.match(/[+*-/]/g)[0]){
        case '+':
            return Number(nums[0]) + Number(nums[1]);
        case '-':
            return Number(nums[0]) - Number(nums[1]);
        case '*':
            return Number(nums[0]) * Number(nums[1]);        
        case '/':
            return Number(nums[0]) / Number(nums[1]);
    }
}
function bodmas(exp){
    nums = exp.match(/[0-9]+/g)
    op = exp.match(/[+*-/]/g)
    
}
bodmas("12*65+4*6");