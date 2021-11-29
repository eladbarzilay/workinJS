function validatePIN (pin) {
    if( (pin.length ==4 || pin.length ==6) && !isNaN(pin)){
      return true;
    }else{
      return false;
    }
  }

  console.log(validatePIN("ad3d."));
  console.log(validatePIN("1"));
  console.log(validatePIN("133333"));