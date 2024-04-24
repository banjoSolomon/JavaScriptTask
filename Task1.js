
function testScore(myScores){
let answers = myScores.filter(num=> num >= 70)
 return answers
}

function increaseScore(thisScores){
    return thisScores.map(num => num + 5)

}



function squareOfEach(thisScores){
    return thisScores.map(num => num * num)

}


function studentPlaning(classTiming){
    return classTiming.filter(num=> num.endsWith("PM"))

}




function bookClub(members, books){
    const distribution = {};
    for(const [index, member] of members.entries()){
        distribution[member] = books[index];
    }
    return distribution
    
}

console.log(bookClub(["oliver"], ["books"]))

module.exports = {testScore, increaseScore, squareOfEach, bookClub, studentPlaning};