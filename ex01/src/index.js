var myPet = {
    "species": "cat",
    "name": "Timo",
    "legs": 4,
    "friends": ["Noa", "Aron"]
 
};
function myFunction (myObj){
    return myObj;
}
console.log(myFunction(myPet));
module.exports = {myPet, myFunction};
