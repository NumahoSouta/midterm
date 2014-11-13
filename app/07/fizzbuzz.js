var fizzbuzz = function(a){
  if(a % 3 ==0 && a % 5 ==0){
    return "fizzbuzz";
  }


  if(a % 5 == 0){
    return "buzz";
  }
  if(a % 3 ==0){
    return "fizz";
  

  }else{
    return a;
  }
}
