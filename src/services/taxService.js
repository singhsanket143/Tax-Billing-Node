const User = require("../models/user");

const calculateTax = async (salary) => {
    let slabs = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3];
    /*
     0-2.5L - 0%
     2.5-5L - 5%
     5-7.5L - 10%
     7.5-10L - 15%
     10-12.5L - 20%
     12.5-15L - 25%
     15L + - 30%
    */
   let taxValue = 0;
   let range = 0; 
   let currValue = 250000;
   let i = 0;
   for(i = 0; i < slabs.length - 1; i++) {
        if(range + 250000 > salary) {
            currValue = salary - range;
            break;
        } else {
            taxValue += slabs[i]*currValue;
            console.log(slabs[i]*currValue)
            range += 250000;
        }
   }
   if(range < salary) {
    taxValue += (salary - range)*slabs[i];
    console.log((salary - range)*slabs[i], salary-range)
   }
   return taxValue;
};

module.exports = {
    calculateTax
}