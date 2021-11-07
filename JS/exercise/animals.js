const app = ()=>{
let txt1 = "Dog12,CAT3,LiOn7,DolphiN11,fish6";
let txt2 ="PIG17,bear29,BiRd8,SNAKE39,donkey14";
let animals = txt1.split(",").concat(txt2.split(","));
let choise = "";
let str = "";


while(choise != "exit"){
    let count = 0;
     choise = Number(prompt(`wellcome to the data center , please choose an option: 
    1: by code.
    2: by name.
    3: exit.`));

        for(let i=0; i<animals.length;i++){
            animals[i] =  animals[i].toLowerCase();
        }

    switch(choise) {
        case 1: 
        let animalCode = Number(prompt("what is the animal code?"));

            for (let i = 0; i < animals.length; i++) {     
                    let num = animals[i].replace(/[^0-9]/g,'');
                if(num == animalCode) {
                    console.log(`
                    animal code : ${animalCode}
                    animal name : ${animals[i].split(animalCode)}
                    `);
                    break;
                }else{
                    count++;
                    if(count == animals.length){

                        str = "animal not exist"; 
                    }
                }
            }
        break;
        case 2: 
        let animalName = prompt("what is the animal name?");
        if(isNaN(animalName)){
        for (let i = 0; i < animals.length; i++) {             
            if(animals[i].includes((animalName.toLowerCase()))) {
                console.log(`
                animal name : ${animalName}
                animal code : ${animals[i].split(animalName.toLowerCase())
                }`);
                break;
            }else{
                count++;
                if(count == animals.length){

                    str = "animal not exist"; 
                }
            }
        }
        }else{
            console.log("write only string")
        }
        break;
        case 3: 
            choise = "exit";
        break;
        default: 
        console.log("only 1,2 or 3 ")

    }
    if(count == animals.length){

        console.log(str)
    }
    
    
}
console.log("good bye")
}