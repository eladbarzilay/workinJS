let x = prompt("who's there?");
if(x=="cancel"){
console.log("cancel");
}else if(x=="other"){
    console.log("i don't know")
}else if(x=="admin"){
let password = prompt("password?")
if(password=="theMaster"){
    console.log("wellcome");
}else if(password=="other"){
    console.log("wrong password");
}else if(password=="cancel"){
    console.log("cancel");
}else{
    console.log("no no ");
}
}else{
    console.log("no no");
}