// filter return a new array based on the condition
let studentsNames = ["Saif", "Ali", "Akbar", "Waqas", "Fariha", "Abu", "Ali", "LUL"]

let newStudentsArray = studentsNames.filter((singleStudent)=>{
    return singleStudent.length == 3
})

console.log(newStudentsArray);
