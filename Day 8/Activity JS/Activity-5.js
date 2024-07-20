//Task 8

const name = "Subham";
const age = 18;
const school = "BMS";
function voteEligible() {
    if(this.age >= 18) {
        console.log("eligible");   
    }
    else {
        console.log("not eligible");
    }
}
const object = {
    name,
    age,
    school,
    voteEligible
};
console.log(object);

//Task 9

const compProp1 = "name"; 
const compProp2 = "age";
const compProp3 = "school"

const obj = {
    [compProp1]: "subham",
    [compProp2]: 18,
    [compProp3]: "BMS"
}

console.log(obj);
