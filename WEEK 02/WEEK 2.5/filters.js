let  myNames = ["Saif", "Allu", "Lallu", "kadu", "shampoo"]

let newArray = myNames.filter((singleName)=>{
    return singleName.length === 4
})

console.log(newArray);
