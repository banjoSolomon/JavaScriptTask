let {testScore, increaseScore, squareOfEach, studentPlaning, bookClub} = require("./Task1.js")

test("Filter filter student score", ()=>{
    let arr = [95, 78, 85, 60, 45, 92, 56, 19, 40];
    let answer = testScore(arr);
    expect(answer).toEqual([95, 78, 85, 92])

}) 

test("Filter increase student score", ()=>{
    let arr = [85, 92, 78, 88, 95];
    let answer = increaseScore(arr);
    expect(answer).toEqual([90, 97, 83, 93, 100])

}) 


test("Square student score", ()=>{
    let arr = [2, 4, 6, 8, 10];
    let answer = squareOfEach(arr);
    expect(answer).toEqual([4, 16, 36, 64, 100])

}) 



test("BookCkub", ()=>{
    let member = ["Sam", "Alex", "Ben"];
    let book = ["Java", "Python", "English"]
    let result = {"Sam": "Java", "Alex": "Python", "Ben": "English"}
    expect(bookClub(member, book)).toEqual(result);




}) 


test("Student planing", ()=>{
    let arr = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM" ];
    let answer = studentPlaning(arr);
    expect(answer).toEqual(["1:00 PM", "3:00 PM", "5:00 PM"])

}) 





