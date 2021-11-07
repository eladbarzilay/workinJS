
const fruits = ["applE","BanaNa","avOCado","CheRry","FiGs","LeMon","GrapEs"];
for (let i = 0 ; i < fruits.length ; i++) {
     let a = (fruits[i].toLowerCase());
    console.log((a.charAt(0).toUpperCase()+a.slice(1)) +"|"+fruits[i].length);
}




