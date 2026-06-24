export{};
let status: string = "S";
let age: number = "25";
console.log("status: %s, Age: %d",status,age)
if (status === "S" && age<20){
    console.log("สถานะ : โสด และยังไม่บรรลุนิติภาวะ");
}else if(status === "S" && age >=20){
    console.log("สถานะ : โสด และบรรลุนิติภาวะ");
}else if(status === "M"){
    console.log("สถานะ : สมรส");
}else{
    console.log("สภานะ : อื่น ๆ")
}