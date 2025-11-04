let  myNames = ["Saif", "Allu", "Lallu", "kadu", "shampoo"]

myNames.map((singleName, idx, arr)=>{
    arr[idx] = arr[idx] + " choudary"
    console.log(singleName, idx, arr);
    
})