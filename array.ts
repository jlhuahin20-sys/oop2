let student: string[] = ["Moss","Alice","John","Jenny"];
let moss: number[] = [80,57,74,95];
for(let i:number =0; i<4; i++){
    console.log(student[i],"ได้คะแนน",moss[i]);
}
student.push("Lucky");
student.forEach((s,x)=>{
    console.log(x, s);
});