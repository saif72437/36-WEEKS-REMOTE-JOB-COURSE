// ek function mai dusra function as a parameter dedo to usko callback bolty hain


function validateAge(age){
    if(age >= 18){
        console.log("You are valid for CNIC card");
        
    }
    else{
        console.log("You are not valid for CNIC card");
        
    }
}

function printMyData(name, myFun){
    console.log("My name is ", name);

    myFun(19)
    
}

// printMyData("Saif", validateAge)

// printMyData("Saif", (age)=>{
//     console.log("My chutiya hoon");
    
// })

printMyData("Saif", function(age){
    console.log("My chutiya hoon");
    
})


