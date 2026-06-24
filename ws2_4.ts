let scores: number[] = [75, 85, 95, 64, 35];
console.log("Score:", scores.join(","));
let student: [number, string] = [1, "John Doe"];
console.log("Student ID:", student[0], ", Name:", student[1]);
for (let i = 0; i < scores.length; i++) {
    console.log("Test", i + 1, "Score:", scores[i]);
}
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
console.log("Total Score:", total);
let average = total / scores.length;
console.log("Average Score:", average);