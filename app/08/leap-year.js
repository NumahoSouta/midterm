var leapYear = function(a){
  if(a == 0){
    return false;
  }

  if(a % 4 != 0){
    return false;
  }
  if(a % 4 ==0 && a % 100!=0 && a % 400!=0){
    return true;
  }
  if(a % 100 ==0 && a % 400 !=0){
    return false;
  }

  if(a % 400 ==0 ){
    return true;
  }

  if(a == 0){
    return false;
  }
  if(a < 0){
    return false;
  }


}
