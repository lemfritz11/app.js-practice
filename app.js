let personName = "Alice";        
let age = 18;                    
let isCitizen = true;            

let isEligibleToVote = (age >= 18) && isCitizen; 

if (isEligibleToVote) {
    console.log(personName + " is eligible to vote.");
} else {
    console.log(personName + " is not eligible to vote.");
}