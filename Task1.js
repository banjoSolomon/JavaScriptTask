
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

function mostNumberAppered(numbers){
    let maxCount = 0;
    let mostOccoured = 0;
    for (let count = 0; count < numbers.length; count++) {
        let currentCount = 0;
        for (let index = 0; index < numbers.length; index++) {
            if (numbers[count] == numbers[index]) {
                currentCount++;
            }

        }
        if (currentCount > maxCount) {
            maxCount = currentCount;
            mostOccoured = numbers[count];
        }
    }
    return mostOccoured;
}






function bookClub(members, books){
    const distribution = {};
    for(const [index, member] of members.entries()){
        distribution[member] = books[index];
    }
    return distribution
    
}

console.log(bookClub(["oliver"], ["books"]))

module.exports = {testScore, increaseScore, squareOfEach, bookClub, studentPlaning,  mostNumberAppered};