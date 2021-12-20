function validate(item){

    if(typeof(item) == "string"){
            if(item.length>1 && !/\d/.test(item)){
              return  true ;
            }else{
                return false;
            }
    } else if(typeof(item) == "number"){
        if (item<0 || item>120) {
            return false;
        }else{
            return true;
        }

    }else{      
        console.log("wrong");
    }



    }


module.exports = validate;