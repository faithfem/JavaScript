/*num1;
num2;
function greaterNum(num1, num2)
{
  if(num1 > num2)
  {
    return num1;
  } else{
    return num2;
  }
}
document.write("The greater number is " + greaterNum(1,2));*/

function assignGrade(score) {
if(score >= 90){
  return "A";
}
  else if(score >=80){
  return "B";
}
  else if(score >=70){
  return "C";
}
  else{
  return "You failed!"
}
}
document.write("The score is " + assignGrade(60));
