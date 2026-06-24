export{};
let student: [string, number, string][] = [["Moss", 50, "D"],["Alice", 87, "D"],["John", 75, "B"]];
console.log(student);
student.push(["Lucky",58,"D"]);
for (const [std, moss, grade]of student){
    console.log("Student %s Moss %d Grade %s",std,moss,grade);
}